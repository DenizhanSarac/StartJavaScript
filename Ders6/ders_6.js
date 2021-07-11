var calisan={
  isim: "Doruk", soyIsim: "Akgül",
  maas: 5000, departman: "İK",

  tamAd: function(){
    return this.isim+ " "+ this.soyIsim;
  }


document.write(calisan.tamAd());
