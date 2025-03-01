import Error from "../components/error";
import { fireEvent, render, screen } from "@testing-library/react";

it("prop olarak alınan hata mesajı ekrana gelir", () => {
  render(<Error info="İnternetiniz yavaş" refetch={() => {}} />);

  screen.getByText(/yavaş/i);
});

it("prop olarak alınan eleman butona tıklanınca çalışır", () => {
  // jest ile sahte bir fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni render et
  render(<Error info="İnternetiniz çok yavaş" refetch={mockFn} />);

  // butonu al
  const button = screen.getByRole("button");

  // tekrar dene butonuna bas
  fireEvent.click(button);

  // refetch fonksiyonu çağrıldı mı
  expect(mockFn).toHaveBeenCalled();
});
