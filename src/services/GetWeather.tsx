const baseUrl = "https://api.openweathermap.org/data/2.5/";

/** Busca a previsão do tempo de uma cidade pelos próximos 5 dias, com intervalos de 3 horas.
 *	@param {string} name Nome de uma cidade
 *	@return  Retorna uma string com uma url
 */
export function getCityForecast(name: string) {
  return `${baseUrl}forecast?q=${name}&units=metric&lang=pt_br&appid=4c81ed6f2f955af88eba373111234fef`;
}
/** Busca a previsão do tempo de uma cidade pelos próximos 5 dias, com intervalos de 3 horas.
 *	@param {string} name Nome de uma cidade
 *	@return  Retorna uma string com uma url
 */
export function getCityWeather(name: string) {
  return `${baseUrl}weather?q=${name}&units=metric&lang=pt_br&appid=4c81ed6f2f955af88eba373111234fef`;
}
