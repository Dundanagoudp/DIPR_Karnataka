import React, { useEffect, useState } from "react";
import MagazineDownloadPdf from "../../components/Magazinepagecom/downloadpdf/DownloadPdfs";
import MagazinePdf2 from "../../components/Magazinepagecom/magazinemodalpdf/MagzineModalpdf";

const MagaZinepages = () => {

  return (
    <div>
      <MagazineDownloadPdf />
      <MagazinePdf2 />
    </div>
  );
};

export default MagaZinepages;