import React, { useEffect, useContext } from 'react'
import Marchofkarnataka from '../../components/marchofkarnatakapage/Marchofkarnataka'
import { LanguageContext } from '../../../context/LanguageContext'

export default function MarchofKarnataka() {
  const { setPageLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // Automatically set to English when this page loads
    setPageLanguage("magazine2");
  }, []);

  return (
    <div>
      <Marchofkarnataka />
    </div>
  )
}
