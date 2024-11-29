const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "anchor",
  programName: "pump_fun",
  programId: "DkgjYaaXrunwvqWT3JmJb29BMbmet7mWUifQeMQLSEQH",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "pump-fun"),
  rustbin: { locked: true },
});
