# Custom Domain Setup - nlpearlai.xyz

## GitHub Pages Ayarları

1. GitHub repository'ye gidin: https://github.com/alphakilolambda/pearlpearl
2. **Settings** > **Pages** bölümüne gidin
3. **Custom domain** alanına `nlpearlai.xyz` yazın
4. **Save** butonuna tıklayın
5. GitHub otomatik olarak DNS kayıtlarını kontrol edecek

## DNS Ayarları

Domain sağlayıcınızda (nlpearlai.xyz için) şu DNS kayıtlarını ekleyin:

### A Records (IPv4)
```
Type: A
Name: @ (veya boş)
Value: 185.199.108.153
TTL: 3600 (veya otomatik)

Type: A
Name: @ (veya boş)
Value: 185.199.109.153
TTL: 3600 (veya otomatik)

Type: A
Name: @ (veya boş)
Value: 185.199.110.153
TTL: 3600 (veya otomatik)

Type: A
Name: @ (veya boş)
Value: 185.199.111.153
TTL: 3600 (veya otomatik)
```

### CNAME Record (www subdomain için - opsiyonel)
```
Type: CNAME
Name: www
Value: alphakilolambda.github.io
TTL: 3600 (veya otomatik)
```

## DNS Yayılma Süresi

DNS değişiklikleri genellikle 24-48 saat içinde yayılır, ancak bazen birkaç dakika içinde de aktif olabilir.

## Kontrol

DNS ayarlarının doğru olduğunu kontrol etmek için:
```bash
dig nlpearlai.xyz +short
```

Bu komut GitHub Pages IP adreslerini göstermelidir.

## HTTPS

GitHub Pages otomatik olarak Let's Encrypt ile SSL sertifikası sağlar. Domain bağlandıktan sonra birkaç saat içinde HTTPS aktif olur.

## Not

- `CNAME` dosyası repository'de `public/CNAME` olarak bulunuyor
- Build sırasında otomatik olarak `out/CNAME` olarak kopyalanacak
- Custom domain kullanıldığı için `basePath` kaldırıldı

