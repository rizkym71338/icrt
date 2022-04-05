import React from "react";
import { Alfatih, Aljazari, Alkhawarizmi, Heroes } from "../../assets";
import { CardTeam } from "../molecules";

const Teams = () => {
  return (
    <div
      id="team"
      className="overflow-hidden py-20 bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-center lg:mb-24 mb-10 font-semibold text-slate-900 dark:text-slate-100 transition-500">
          Our <span className="text-primary-500">Teams</span>
        </h1>
        <div className="grid px-6 md:px-0 grid-flow-row lg:grid-cols-4 lg:gap-7 md:gap-6 gap-5 md:grid-cols-2 grid-cols-1 transition-500">
          <CardTeam
            src={Alfatih}
            content='~ Memiliki makna "Sang Penakluk" artinya mereka mampu menaklukkan siapapun dengan kharisma atau wibawa yang mereka miliki. ~'
          />
          <CardTeam
            src={Alkhawarizmi}
            content='~ Memiliki makna " Sang Pencipta" artinya mereka mampu menciptakan inovasi baru dengan gaya kekhasan dengan penuh kejeniusan. ~'
          />
          <CardTeam
            src={Heroes}
            content='~ Memiliki makna "Sang Pemimpin" yang berarti mampu memimpin siapapun ditengah keraguan dengan proses yang gemilang. ~'
          />
          <CardTeam
            src={Aljazari}
            content='~ Memiliki makna " Sang Engineer " artinya mereka mampu menciptakan perangkat rumit dan menakjubkan. karyanya tersebut dapat kita rasakan. ~'
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;
