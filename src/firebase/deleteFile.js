import { getStorage, ref, deleteObject } from "firebase/storage";

export default async function deleteFile(fileName) {
    const storage = getStorage();
    const fileRef = ref(storage, fileName);

    deleteObject(fileRef).then(() => {
        console.log("File deleted successfully");
    }).catch((error) => {
        console.error("Error deleting file:", error);
    });

}