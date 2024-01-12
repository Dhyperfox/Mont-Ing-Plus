import React, { useState } from 'react';
import { Reveal } from "react-awesome-reveal";
import { fromTop } from "../Animaciok";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useTranslation, Trans } from 'react-i18next';

const Machines = () => {
    const { t, i18n } = useTranslation();

    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [openThird, setOpenThird] =  useState(false);
  
    const handleOpenFirst = () => setOpenFirst(true);
    const handleOpenSecond = () => setOpenSecond(true);
    const handleOpenThird = () => setOpenThird(true);
  
    return (
        <section className="machines section" id="machines">
            <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
                <div className="modal-machine">
                <h3>JCB-4CX</h3>
                <p>{t("machines.machine1.about")}</p>
                <table>
                    <tr>
                    <td>{t("machines.machine1.kanal")}</td>
                    <td>{t("machines.machine1.kapacitet")}<br/>{t("machines.machine1.kapacitet2")}</td>
                    </tr>
                    <tr>
                    <td>{t("machines.machine1.hatso-kanal")}</td>
                    <td>{t("machines.machine1.melyseg")}</td>
                    </tr>
                    <tr>
                    <td>{t("machines.machine1.furo")}</td>
                    <td>{t("machines.machine1.furo-text")}</td>
                    </tr>
                    <tr>
                    <td>{t("machines.machine1.hidraulik")}</td>
                    <td>{t("machines.machine1.hidraulik-text")}</td>
                    </tr>
                    <tr>
                    <td>{t("machines.machine1.fog")}</td>
                    <td>{t("machines.machine1.fog-text")}</td>
                    </tr>
                    <tr>
                    <td>{t("machines.machine1.dongolo")}</td>
                    <td>{t("machines.machine1.dongolo-text")}</td>
                    </tr>
                    <tr>
                    <td>{t("machines.machine1.csatlakozo")}</td>
                    <td>{t("machines.machine1.csatlakozo-text")}</td>
                    </tr>
                </table>
                </div>
            </Modal>
            <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
                <div className="modal-machine">
                <h3>MLT-1030</h3>
                <p>{t("machines.machine2.about")}</p>
                </div>
            </Modal>
            <Modal open={openThird} onClose={() => setOpenThird(false)} center>
                <div className="modal-machine">
                <h3>Mercedes Atego</h3>
                <p>{t("machines.machine3.about")}</p>
                </div>
            </Modal>
        <div className="container">
          <div className="machines-content">
            <h2>{t("machines.title")}</h2>
            <div className="machine-list">
              <Reveal keyframes={fromTop} cascade triggerOnce>
                <div className="machine-list__item" onClick={handleOpenFirst}>
                    <img src="img/gep1.jpg" alt="gep1"/>
                  <h3>JCB-4CX</h3>
                  <p>{t("machines.about1")}</p>
                </div>
                <div className="machine-list__item" onClick={handleOpenSecond}>
                    <img src="img/gep2.jpg" alt="gep2"/>
                  <h3>MLT-1030</h3>
                  <p>{t("machines.about2")}</p>
                </div>
                <div className="machine-list__item" onClick={handleOpenThird}>
                    <img src="img/gep3.jpg" alt="gep3"/>
                  <h3>Mercedes Atego</h3>
                  <p>{t("machines.about3")}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Machines;