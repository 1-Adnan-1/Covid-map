import Item from "../pages/home/item";
import { render, screen } from "@testing-library/react";

test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // test edilecek bileşen render
  render(<Item color="text-blue-500" text="Toplam Test" value="399M" />);

  // iconu al
  const icon = screen.getByTestId("icon");

  // color prop u ile gelen değer icon un className inde varmı
  expect(icon).toHaveClass("text-blue-500");

  //1) elementi çağır sonra textine bak
  const h2 = screen.getByRole("heading");
  expect(h2).toHaveTextContent("399M");

  //2) elementi textine göre çağır
  screen.getByText("Toplam Test");
});
