// import {PDFDocument} from "@cantoo/pdf-lib"

// export const  toReadPdfParse = async (path: string) => {
//     // Fetch PDF
//     const pdfUrl = 'https://pdf-lib.js.org/assets/with_cropbox.pdf';
//     const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());

//     // Load the PDF document without updating its existing metadata
//     const pdfDoc = await PDFDocument.load(pdfBytes, { 
//       updateMetadata: false 
//     })
//     const title = pdfDoc.getTitle();
//     const author = pdfDoc.getAuthor();
//     const subject = pdfDoc.getSubject();
//     const creator = pdfDoc.getCreator();
//     const keywords = pdfDoc.getKeywords();
//     const producer = pdfDoc.getProducer();
//     const creationDate = pdfDoc.getCreationDate();
//     const modificationDate = pdfDoc.getModificationDate();
//     const pages = pdfDoc.getPages();
//     console.log('title', title);
//     console.log('title', title);
//     console.log('title', title);
//     console.log('title', title);
//     console.log('title', title);
// }