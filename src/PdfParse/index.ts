import * as PdfParse from "pdf-parse";
export const getPdfParse = async (path: string) => {
    const pdfUrl = path || 'https://pdf-lib.js.org/assets/with_cropbox.pdf';
    const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
    PdfParse(pdfBytes).then((data: any) => {
        console.log('numpages', data.numpages);
        // number of rendered pages
        console.log('numrender', data.numrender);
        // PDF info
        console.log('info', data.info);
        // PDF metadata
        console.log('metadata', data.metadata);
        // PDF.js version
        // check https://mozilla.github.io/pdf.js/getting_started/
        console.log('version', data.version);
        // PDF text
        console.log('text', data.text);
    })
}