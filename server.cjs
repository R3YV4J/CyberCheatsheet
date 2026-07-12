var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var genAI = null;
function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables. Please configure it in your Secrets/Settings panel.");
    }
    genAI = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return genAI;
}
app.post("/api/generate", async (req, res) => {
  try {
    const { toolName, customPrompt } = req.body;
    if (!toolName) {
      res.status(400).json({ error: "El nombre de la herramienta es obligatorio." });
      return;
    }
    const ai = getGenAI();
    const systemInstructions = `Eres un pentester senior especializado en crear referencias t\xE9cnicas de alta calidad. Tu funci\xF3n es generar cheatsheets interactivas para herramientas de hacking y ciberseguridad, organizadas por casos de uso reales, no por flags alfab\xE9ticos.

PRINCIPIO FUNDAMENTAL:
Las cheatsheets se organizan por "\xBFqu\xE9 quiero conseguir?", no por "\xBFqu\xE9 flags existen?". Un pentester no busca flags, busca resolver una situaci\xF3n concreta.

Debes generar entre 6 y 10 casos de uso siguiendo esta estructura exacta (respeta rigurosamente los delimitadores y los nombres de campos):

===CASO===
TITULO: [Qu\xE9 se consigue con este comando \u2014 acci\xF3n concreta]
CATEGORIA: [Reconocimiento | Web | Passwords | Post-explotaci\xF3n | Evasi\xF3n]
DIFICULTAD: [b\xE1sico | intermedio | avanzado]
FRECUENCIA: [siempre | com\xFAn | ocasional]

COMANDO:
[comando exacto con <parametro> en angle brackets para los valores variables]

FLAGS:
[flag corto o largo] \u2192 [explicaci\xF3n concreta de qu\xE9 hace y cu\xE1ndo usarlo]
[flag corto o largo] \u2192 [explicaci\xF3n concreta de qu\xE9 hace y cu\xE1ndo usarlo]
[a\xF1ade tantos flags como aparezcan en el comando]

EJEMPLO:
[mismo comando con valores reales y concretos \u2014 nunca placeholders en el ejemplo, usa IPs de rangos RFC 1918 reales, dominios de pr\xE1ctica como target.htb, wordlists reales como /usr/share/wordlists/rockyou.txt]

TIP: [consejo pr\xE1ctico, gotcha, combinaci\xF3n con otra herramienta, o advertencia de opsec o rendimiento de la vida real]
===FIN===

Reglas de contenido:
1. Casos de uso reales encaminados a resolver un problema concreto en una auditor\xEDa de seguridad.
2. Ejemplos 100% reales. No uses dummy placeholders en "EJEMPLO".
3. Identifica correctamente la CATEGORIA (Reconocimiento, Web, Passwords, Post-explotaci\xF3n, Evasi\xF3n).
4. El idioma de respuesta debe ser rigurosamente ESPA\xD1OL.`;
    const modelPrompt = `Genera la cheatsheet interactiva de grado profesional para la herramienta: "${toolName}".` + (customPrompt ? ` Enf\xF3cate o a\xF1ade este contexto adicional: ${customPrompt}.` : "") + ` Aseg\xFArate de proveer entre 6 y 10 casos de uso completos con el formato exacto de delimitadores ===CASO=== y ===FIN===. No pongas explicaciones introductorias ni de cierre; ve directo a los bloques de comandos.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: modelPrompt,
      config: {
        systemInstruction: systemInstructions,
        temperature: 0.2
        // low temperature for reliable formatting
      }
    });
    const text = response.text || "";
    res.json({ rawCheatsheet: text });
  } catch (error) {
    console.error("Error generating cheatsheet with Gemini:", error);
    res.status(500).json({ error: error.message || "Error al invocar la API de Gemini" });
  }
});
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}
setupServer().catch((err) => {
  console.error("Failed to bootstrap server:", err);
});
//# sourceMappingURL=server.cjs.map
