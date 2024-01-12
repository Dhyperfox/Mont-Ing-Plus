import React, { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useTranslation, Trans } from 'react-i18next';

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export default function App() {
    const [photos, setPhotos] = useState([]);
    const [index, setIndex] = useState(-1);
    const [t, i18n] = useTranslation();

    useEffect(() => {
        fetch("https://montingplus.rs/api/images.php")
            .then((response) => response.json())
            .then((data) => {
                // Átalakítsd a letöltött adatokat a PhotoAlbumhoz megfelelő formátumba
                const formattedPhotos = data.map((photo, index) => ({
                    src: photo.path,
                    width: 1080, // Módosítsd a szükséges szélességre
                    height: 800, // Módosítsd a szükséges magasságra
                    srcSet: breakpoints.map((breakpoint) => ({
                        src: `${photo.path}?width=${breakpoint}`,
                        width: breakpoint,
                        height: Math.round((800 / 1080) * breakpoint), // Módosítsd a szükséges arányokra
                    })),
                    key: index,
                }));
                setPhotos(formattedPhotos);
            })
            .catch((error) => {
                console.error("Hiba történt a képek letöltése közben:", error);
            });
    }, []);

    return (
         <section className="section gallery" id="gallery">
        <div className="container gallery-content">
             <div className="text-holder">
                <h2>{t("gallery.title")}</h2>
            </div>
            <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </div>
        </section>
    );  

}
