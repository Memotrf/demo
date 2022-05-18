import fetch from "node-fetch";
import jsdom from "jsdom";

const fundCode = process.argv.length > 2 ? process.argv[2] : undefined;
if (fundCode) {
  await fetch("https://codequiz.azurewebsites.net", {
    headers: { cookie: "hasCookie=true" },
  })
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      let result;
      const dom = new jsdom.JSDOM(html);
      const table = dom.window.document.querySelector("table");

      if (table) {
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
          const cells = rows[i].cells;
          if (cells.length > 2) {
            if (cells[0].textContent.indexOf(fundCode) > -1) {
              result = cells[1].textContent;
              break;
            }
          }
        }

        if (result) {
          console.log(result);
        } else {
          console.log("Fund Code not found.");
        }
      } else {
        console.warn("Can't retrieve data from website.");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
