import path from "node:path";

export default () => {
    const dir: string = "E:\\LABFORWEB\\Labforweb_CEMV\\NodeJSExpressMongoDB\\NodeJSExpressMongoDB_C\\L002 - 2025.10.27";
    const adesso: Date = new Date();
    const anno: Number = adesso.getFullYear();
    const file: string = "file.txt";

    // const s = dir + "\\" + anno + "\\" + file;
    const filePath: string = path.join(dir, anno.toString(), file);
    console.log(filePath);

    // const filePath2 = path.join(dir, "albero.jpg");
    const filePath2:string = "E:\\LABFORWEB\\Labforweb_CEMV\\NodeJSExpressMongoDB\\NodeJSExpressMongoDB_C\\L002 - 2025.10.27\\albero.jpg";
    console.log("File:", path.basename(filePath2));
    console.log("Dir:", path.basename(dir));
}