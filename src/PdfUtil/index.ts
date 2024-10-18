import { App, Events, request } from "obsidian";
import { getPdfParse } from "../PdfParse";
export class PdfUtil extends Events {
    keyword: string;

    constructor() {
        super()
        this.keyword = "";
    }
    getPathList() {
        let fileList = ["D:\文件\pdf\testpdf.pdf"];
        return fileList;
    }
    toSerach(keyword: string) {
        this.keyword = keyword;
        let fileList = this.getPathList();
        console.log('this.keyword', this.keyword, fileList)
        this.toGetPdfParse(fileList)
    }
    toGetPdfParse(fileList: string[]) {
        for (let i = 0, l = fileList.length; i < l; i++) {
            getPdfParse(fileList[i]);
        }
    }
}