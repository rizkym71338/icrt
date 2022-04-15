import React from "react";
import { Alfatih, Aljazari, Alkhawarizmi, Heroes } from "../../assets";
import { CardTeam, SectionTitle } from "../molecules";

const Teams = () => {
  return (
    <div
      id="team"
      className="overflow-hidden py-20 bg-white dark:bg-slate-900 transition-500"
    >
      <div className="container transition-500">
        <SectionTitle titleLeft="Our" titleRight="Teams" />
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
