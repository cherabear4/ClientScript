const fs = require("fs")


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 


readline.question('', inputFile => {
	readline.close();
  fs.readFile(inputFile + ".cl", 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
  }
  transpileKeywords = () => {

    let mapObj = {
      "@mc": "@Override protected void mouseClicked(int mouseX, int mouseY, int mouseButton) throws IOException",
      "@log": "System.out.println",
      "@drwscrn": "@Override public void drawScreen(int mouseX, int mouseY, float partialTicks)",
      "@ing": "@Override public void initGui()",
      "@ap": "@Override protected void actionPerformed(GuiButton button) throws IOException",
      "@kt": "@Override protected void keyTyped(final char character, final int key) throws IOException",
      }


      const replace = data.replace(/@mc|@log|@drwscrn|@ing|@ap/gi, (m) => mapObj[m] ?? m);
      fs.writeFile(inputFile + ".java", replace, 'utf8', function (err) {
        if (err) return console.log(err);
     });
  }

  transpileKeywords();
})
});
