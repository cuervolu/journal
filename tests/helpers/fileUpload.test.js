import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';



describe('Pruebas en fileUpload', () => {
    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        const imageUrl = 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'; 

        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/')

        const imageId = segments[segments.length - 1].replace('.jpg','');

        await cloudinary.api.delete_resources(['journal/'+imageId]);
     })
     test('debe retornar null', async() =>  {
        const file = new File([], 'foto.jpg');

        const url = await fileUpload(file);

        expect(url).toBe(null);
     })
});