import { Container, Box, Typography, Button, Link } from "@mui/material";

import AppBarNavigation from "../../components/appbar";

import contribuir_img from "../../assets/img-sec-contribuicao.png";

import "./index.css";

import "../../styles/utility-classes.css";

//página de como contribuir
export default function ContributesPage() {
  return (
    <>
      <AppBarNavigation />
      <section className="contain-contributions py-8">
        <div>
          <img src={contribuir_img} />
        </div>

        <div className="area-text-contributions">
          <div className="separador-blue">
            <h2 className="title-h3 ml-1">Curtiu o Site ?</h2>
            <span className="subtitle-02 mt-1 ml-1">Ajude nos a mantê-lo!</span>
          </div>
          <p className="title-h5 mt-6">
            <span className="subtitle-01">Seek Jobs</span> é um Projeto
            Open-Source
          </p>
          <p className="pt-3 subtitle-02">
            O seek jobs é um site gratuito de código aberto construído pela
            comunidade, nosso objetivo é ajudar a comunidade de desenvolvedores
            a encontrar emprego na área de forma simples e sem burocracia. Nosso
            site é mantido com a ajuda de pessoas como você, então considere nos
            ajudar.
          </p>

          <button className="btn mt-4">
            <a href="#">Quero contribuir!</a>
          </button>

          <p className="subtitle-02 link-da-vakinha mt-4">
            ou pelo pix da nossa Vakinha online <br></br>
            <a href="https://www.vakinha.com.br/3344996" target="_blank">
              3344996@vakinha.com.br
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
