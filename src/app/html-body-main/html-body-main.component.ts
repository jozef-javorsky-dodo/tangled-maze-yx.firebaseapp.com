import { Component } from "@angular/core";



@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})



export class HtmlBodyMainComponent { }






try {

  setTimeout(() => {

    const maze_func = () => {

      for (let yindex: number = <number>0; yindex <= <number>16; yindex++) {

        const tr_ele = document.createElement(<string>"tr");

        for (let xindex: number = <number>0; xindex <= <number>22; xindex++) {

          const td_ele = document.createElement(<string>"td");

          td_ele.style.padding = <string>"1mm 2mm 2mm 2mm";
          td_ele.style.backgroundColor = <string>"rgb(122, 122, 122)";
          td_ele.style.border = <string>"1mm solid rgb(122, 122, 122)";
          td_ele.style.borderRadius = <string>"1mm";

          if ((yindex === <number>0) && (xindex === <number>0)) {
            td_ele.style.backgroundColor = <string>"rgb(244, 122, 122)";
            td_ele.style.borderColor = <string>"rgb(244, 122, 122)";
          }
          else if ((yindex === <number>16) && (xindex === <number>22)) {
            td_ele.style.backgroundColor = <string>"rgb(122, 122, 244)";
            td_ele.style.borderColor = <string>"rgb(122, 122, 244)";
          }
          else if (
            ((yindex % Number(2) === <number>0) && (xindex % Number(2) === <number>0)) ||
            ((yindex % Number(4) === <number>0) && (xindex % Number(4) === <number>0))
          ) {
            td_ele.style.backgroundColor = <string>"rgb(0, 0, 0)";
            td_ele.style.borderColor = <string>"rgb(0, 0, 0)";
          }
          else if ((yindex === <number>1) && (xindex === <number>1)) {
            td_ele.style.backgroundColor = <string>"rgb(122, 244, 122)";
            td_ele.style.borderColor = <string>"rgb(61, 122, 61)";
          }
          else
            Number(<number>0 + <number>0);

          tr_ele.appendChild(td_ele);

        }

        document.querySelector(<string>"#html-body-main-table-tbody")?.appendChild(tr_ele);

      }

    };

    maze_func();

  }, <number>500);

} catch (___err_) {

  if (___err_) {
    console.clear();
    alert(<string>"bug");
    console.log(___err_);
  }

}






try {

  setTimeout(() => {

    const tds = document.querySelectorAll(<string>"td");
    let startie = <number>24;
    const pos_indxs: readonly number[] = [Number(-23), Number(-1), <number>1, <number>1, <number>23, <number>23];

    const rerender_cell_func = () => {

      const startie_ele = tds[startie] as HTMLTableCellElement;
      const nextie: number = startie + pos_indxs[Number(Math.floor(Math.random() * <number>6))];
      const nextie_ele = tds[nextie] as HTMLTableCellElement;

      if ((startie === <number>366) || (startie === <number>367) || (startie === <number>389))
        setTimeout(
          () => window.location.reload(), <number>2000
        )
      else if ((nextie > <number>390) || (nextie < Number(0)))
        setTimeout(
          () => rerender_cell_func(), <number>40
        )
      else if (
        (nextie_ele.style.backgroundColor === <string>"rgb(122, 122, 122)") ||
        (nextie_ele.style.backgroundColor === <string>"rgb(31, 122, 31)")
      ) {
        nextie_ele.style.backgroundColor = <string>"rgb(122, 244, 122)";
        nextie_ele.style.borderColor = <string>"rgb(122, 244, 122)";
        startie_ele.style.backgroundColor = <string>"rgb(31, 122, 31)";
        startie_ele.style.borderColor = <string>"rgb(31, 122, 31)";
        startie = nextie;
        setTimeout(() => rerender_cell_func(), <number>40);
      }
      else
        setTimeout(() => rerender_cell_func(), <number>40);

    };

    rerender_cell_func();

  }, <number>900);

} catch (___err___) {

  if (___err___) {
    console.clear();
    alert(<string>"bug");
    console.log(___err___);
  }

}