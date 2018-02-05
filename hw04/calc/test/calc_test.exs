defmodule CalcTest do
  use ExUnit.Case
  doctest Calc

  test "handles addition of two numbers" do
    assert Calc.eval("2 + 3") == 5
  end

  test "handles subtraction of two numbers" do
    assert Calc.eval("2 - 4") == -2
  end

  test "handles multiplication of two numbers" do
    assert Calc.eval("5 * 1") == 5
  end

  test "handles division of two numbers" do
    assert Calc.eval("20 / 4") == 5
  end

  test "handles precedence" do
    assert Calc.eval("1 + 3 * 3 + 1") == 11
  end

  test "handles parentheses" do
    assert Calc.eval("(1 + (2 * (5 - 4)) + 3)") == 6
  end

  test "handles nested parentheses" do
    assert Calc.eval("(1 + (2 * (3 + (4 * (5 + 6)))) + 3)") == 98
  end

  test "handles two digit numbers" do
    assert Calc.eval("24 / 6 + (5 - 4)") == 5
  end

  test "handles many two-three digit numbers" do
    assert Calc.eval("(92 - 22) * 5 - 100 / 5") == 330
  end

  test "handles consecutive division" do
    assert Calc.eval("(92 - 2) / 9 / 5") == 2
  end

  test "handles complex calculation" do
    assert Calc.eval("((92 - 22) * 5 - 100) / 5") == 50
  end

  test "handles negative numbers" do
    assert Calc.eval("-3 / -6 / 2") == 0
  end

  test "handles complex negative calculation" do
    assert Calc.eval("(1 * -3) / 3 * -2") == 2
  end

end
