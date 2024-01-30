# React Router ile Kitap Uygulaması

Bu proje, React ve React Router kullanılarak oluşturulmuş bir basit kitap uygulamasını içermektedir. Proje, farklı sayfalar arasında gezinme, ürünleri listeleyerek detaylarına ulaşma ve 404 hatası gibi durumları ele almak için React Router'ın kullanımını örneklemektedir.

## Proje Yapısı

- **src/components/Header.js:** Ana sayfa ve ürünler sayfasına yönlendiren başlık bileşeni.
- **src/components/Footer.js:** Sayfanın altında bulunan footer bileşeni.
- **src/pages/MainPage.js:** Ana sayfa içeriğini oluşturan bileşen.
- **src/pages/ProductsPage.js:** Tüm ürünleri listeleyen sayfa bileşeni.
- **src/pages/ProductDetail.js:** Bir ürünün detaylarını gösteren sayfa bileşeni.
- **src/pages/NotFound.js:** Geçersiz URL'lerde görüntülenecek 404 sayfası bileşeni.
- **src/App.js:** Ana uygulama bileşeni, tüm sayfaları ve router'ı içerir.

## Kullanılan Teknolojiler

- **React:** Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.
- **React Router:** Sayfalar arası gezinme ve yönlendirme için kullanılan bir router kütüphanesi.

## Nasıl Çalıştırılır

1. Proje klasörünü bilgisayarınıza indirin.
2. Terminal veya komut istemcisini açın.
3. Proje klasörüne gidin: `cd proje-klasoru`
4. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
5. Uygulamayı başlatmak için `npm start` komutunu kullanın.

## Ekran Görüntüsü

![](book.gif)
