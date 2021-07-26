/** Retorna uma string com nome o dia da semana
 * @param {number} addDay - Adianta o dia a ser retornado. Se nenhum parâmetro for informado o dia de hoje será retornado.
 * @return {string} Retorna o nome do dia da semana
 */
export function getWeekday(addDay: number = 0): string {
  return Intl.DateTimeFormat(navigator.language, { weekday: "long" })
    .format(new Date().setDate(new Date().getDate() + addDay))
    .split("-")[0];
}
