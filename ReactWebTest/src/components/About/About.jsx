import selfie from "../pictures/selfie.jpg";
import "./About.css";

export default function Hakkimda() {
  return (
    <>
      <div className="body">
        <div className="aboutPart">
          <h2 id="header">Hakkımda Daha Fazla</h2>
          <p id="pr1">
            Adım Tuna Enes Kızılırmak, 2000 yılında Ankara'da doğdum. Hacettepe
            Üniversitesi İletişim Fakültesi İletişim Bilimleri bölümünden mezun
            oldum. Mezun olmadan önce yaptığım stajlarda bölümümle alakalı
            sektörlerin pek hoşuma gitmediğini fark etmemle beraber kodlama
            serüvenim başladı. Öncelikle siber güvenliğe yoğunlaşıp bir süre
            siber güvenlik eğitimi aldım. Kodlamaya ise Python temellerini
            öğrenerek başladım ve daha sonrasında C# temelleri ile devam ettim.
            C# seçmemin nedeni hem .Net altyapısını öğrenmek (henüz .Net
            altyapısına tam giriş yapamadım) hem de Unity ile oyun geliştirme
            alanına da adım atabilmekti. Fakat sonrasında web geliştirme alanına
            yöneldim. Bunun en büyük sebebi üniversitede aldığım tasarım
            bilgisini web geliştirme alanında da Front-End Developer olarak
            kullabileceğimi fark etmemle oldu. Şu an aktif olarak birinci
            önceliğim başarılı bir Front-End Developer olmak. Bu yüzden HTML,
            CSS, Javascript ve React gibi teknolojiler üzerinde yoğunlaşıyorum.
            Fullstack kurs almamdan kaynaklı Back-End tarafında da Express.js
            ile az da olsa bir bilgim var ancak asıl hedefim Front-End tarafında
            uzmanlaşmak.
          </p>
          <div id="fotoparagraf">
            <p id="pr2">
              Boş zamanlarımda oyun oynamayı, film izlemeyi ve arkadaşlarımla
              vakit geçirmeyi seviyorum. Bir de evime kaçak giren, komşumun
              kedisi ile biraz güreşiyoruz. Yarı cins yarı tekir olmasından
              kaynaklı biraz manyak. Eğer arkadaşlarım varsa League of Legends,
              Valorant gibi oyunlar oynuyorum. Tek başımaysam Skyrim, Witcher 3
              gibi RPG oyunları tercih ediyorum. İçine dalabileceğim evrenler
              hoşuma gidiyor.
            </p>
            <img id="Selfie" src={selfie} alt="Selfie" width={400} />
          </div>
          <div id="muzik">
            <div id="left-iframe">
              <iframe
                id="black"
                src="https://open.spotify.com/embed/track/5Xak5fmy089t0FYmh3VJiY?utm_source=generator"
                style={{ borderRadius: "12px" }}
                width="50%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div id="text">
              <p id="pr3">
                Müzik zevkim ise tam bir çorba. Pop, rock, metal, rap, game
                soundtrack hepsini dinlerim. Yeter ki şarkı güzel olsun. Ancak
                en en en önceliğim Rock müzik. "Alice in Chains - Nutshell" ve
                "Pearl Jam - Black" gibi şarkılar favorilerim arasında.
              </p>
            </div>

            <div id="right-iframe">
              <iframe
                id="nutshell"
                src="https://open.spotify.com/embed/track/2JuasWPUodaUxf5nwNpciQ?utm_source=generator"
                style={{ borderRadius: "12px" }}
                width="50%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
