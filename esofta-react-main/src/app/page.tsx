"use client"
import React from "react"
import Header from "@/components/Header/Header";
import CardSection from "@/components/CardSection/CardSection";

export default function Home() {

  return (
      <>
          <Header titulo={"Squirtle"}/>
          <main>
              <CardSection titulo={"Informações sobre o Squirtle"}>
                  <div>
                      <img
                          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                          alt="Squirtle 1"
                      />
                      <img
                          src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
                          alt="Squirtle 2"
                      />
                  </div>
                  <p>
                      Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
                      Kanto e evolui para Wartortle.
                  </p>
              </CardSection>
              <CardSection titulo={"Características"}>
                  <p>
                      Squirtle é conhecido por sua concha nas costas, que oferece proteção
                      adicional. Ele possui ataques de água poderosos, como Water Gun e
                      Hydro Pump.
                  </p>
              </CardSection>
          </main>
      </>

  );
}
