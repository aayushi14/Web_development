defmodule Calc do

  defp applyOp(op, num1, num2) do
    {num1, _} = Integer.parse(num1)
    {num2, _} = Integer.parse(num2)
    case op do
      "+" ->
        result = num2 + num1
      "-" ->
        result = num2 - num1
      "*" ->
        result = num2 * num1
      "/" ->
        result = div(num2, num1)
    end
    result
  end

  defp hasPrecedence(op1, op2) do
    cond do
      (op2 == "(" || op2 == ")") -> "no"
      ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) -> "no"
      true -> "yes"
    end
  end

  defp solveBrackets(values, ops) do
    if (List.last(ops) != "(") do
      {op, ops} = List.pop_at(ops,-1)
      {num1, values} = List.pop_at(values,-1)
      {num2, values} = List.pop_at(values,-1)
      result = applyOp(op, num1, num2)
      values = List.insert_at(values, -1, Integer.to_string(result))
      solveBrackets(values, ops)
    else
      {op, ops} = List.pop_at(ops,-1)
      res = [ops]++[values]
    end
  end

  defp solvePrecedence(token, values, ops) do
    if (length(ops) != 0) do
      if (hasPrecedence(token, List.last(ops)) == "yes") do
        {num1, values} = List.pop_at(values,-1)
        {num2, values} = List.pop_at(values,-1)
        {op, ops} = List.pop_at(ops,-1)
        result = applyOp(op, num1, num2)
        values = List.insert_at(values, -1, Integer.to_string(result))
        solvePrecedence(token, values, ops)
      else
        ops = List.insert_at(ops, -1, token)
        res = [ops]++[values]
      end
    else
      ops = List.insert_at(ops, -1, token)
      res = [ops]++[values]
    end
  end

  defp solveRemaining(values, ops) do
    if (length(ops) != 0) do
      {num1, values} = List.pop_at(values,-1)
      {num2, values} = List.pop_at(values,-1)
      {op, ops} = List.pop_at(ops,-1)
      result = applyOp(op, num1, num2)
      values = List.insert_at(values, -1, Integer.to_string(result))
      solveRemaining(values, ops)
    else
      values
    end
  end

  defp loop(exp, strlen, count, values, ops) do
    if (count < strlen) do
      {token, remainingExp} = List.pop_at(exp,0)
      cond do
        (Regex.match?(~r/^-*[0-9]+$/, token)) ->
          values = List.insert_at(values, -1, token)
        (token == "(") ->
          ops = List.insert_at(ops, -1, token)
        (token == ")") ->
          res = solveBrackets(values, ops)
          {res1,_} = List.pop_at(res,0)
          ops = res1
          {res2,_} = List.pop_at(res,1)
          values = res2
        (token == "+" || token == "-" || token == "*" || token == "/") ->
          res = solvePrecedence(token, values, ops)
          {res1,_} = List.pop_at(res,0)
          ops = res1
          {res2,_} = List.pop_at(res,1)
          values = res2
      end
        count = count + 1
        loop(remainingExp, strlen, count, values, ops)
      else
        res = [ops]++[values]
      end
  end

  defp reframeExpression(inputString) do
    inputString = inputString
                  |> (&Regex.replace(~r/\(/, &1, "( ")).()
                  |> (&Regex.replace(~r/\)/, &1, " )")).()
    inputString
  end

  def eval(inputString) do
    inputString = reframeExpression(inputString)
                  |> String.trim()
    exp = String.split(inputString)
    strlen = length(exp)
    count = 0
    values = []
    ops = []
    res = loop(exp, strlen, count, values, ops)
    {res1,_} = List.pop_at(res,0)
    ops = res1
    {res2,_} = List.pop_at(res,1)
    values = res2
    values = solveRemaining(values, ops)
    {answer, _} = List.pop_at(values, -1)
    answer = String.to_integer(answer)
    answer
  end

  def main do
    inputString = IO.gets("Enter expression: ")
    answer = eval(inputString)
    IO.puts "#{answer}"
    main()
  end
end
