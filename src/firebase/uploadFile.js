import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export default async function uploadFile(uri) {
    const fileName = uuidv4() + '.m4a';
    const storage = getStorage();
    const storageRef = ref(storage, fileName);

    const response = await fetch(uri);
    const blob = await response.blob();

    const uploadTask = uploadBytesResumable(storageRef, blob);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        // console.log('Upload is paused');
                        break;
                    case 'running':
                        // console.log('Upload is running');
                        break;
                }
            }, 
            (error) => {
                console.error("Unsuccessful upload", error);
                reject(error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    const extractedFileName = downloadURL.split('/').pop().split('?')[0];
                    console.log("File name:", extractedFileName);
                    resolve(extractedFileName);
                });
            }
        );
    });
}
