import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";
import { totalApi } from "../utils/api";
import { totalData } from "../utils/constants";
import millify from "millify";

jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("istatistik component testleri", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("bileşen renderlandığında ekrana loader gelir", () => {
    totalApi.get.mockReturnValue(new Promise(() => {}));

    // bileşeni renderla
    render(<Statistics />);

    // ekranda loader component i  varmı
    screen.getByTestId("loader");
  });

  test("api'den hata geldiğinde ekranda hata mesajı yazar", async () => {
    // error testi için fonksiyonun hata döndürmesini iste
    totalApi.get.mockRejectedValue(new Error("404 hatası"));

    // bileşeni renderla
    render(<Statistics />);

    // belirli bir sürenin ardından ekrana hata basılır
    await waitFor(() => screen.getByText("Üzgünüz bir sorun oluştu"));
  });

  test("api'den cevap geldiğinde ekrana veriler basılır", async () => {
    // verilerin test için get fonksiyonun verileri döndürmesini istedik
    totalApi.get.mockResolvedValue({ data: { data: totalData } });

    // bileşeni renderla
    render(<Statistics />);

    // api isteğinin atılmasını bekle
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // toplam vaka sayısı ekrana basılır
    screen.getByText(millify(totalData.confirmed));

    screen.getByText(millify(totalData.active));

    screen.getByText(millify(totalData.deaths));
  });
});
