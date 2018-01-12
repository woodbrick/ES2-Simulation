

let generatorFactor = Array.from({length: 9}).map((_, index) => {
	let num = Array.from({length: index})
	.reduce((pre, cur, index) => pre + (0.2 - 0.01 * index), 0.2)
	return Math.floor(num * 100) / 100  
})

generatorFactor.forEach((factor, index) => {
  let desc = `
  <SimulationDescriptor Name="ShipLevel${(index+2+'').padStart(2, '0')}" Type="ShipLevel" IsSerializable="false">
    <Modifier TargetProperty="MaximumHealth" Operation="Percent" Value="${factor}" Path="ClassShip/ClassSectionCore"/>
    <Modifier TargetProperty="Accuracy" Operation="Addition" Value="${Math.ceil(factor * 10) / 100}" Path="ClassShip/ClassSection/ClassModuleWeapon"/>
  </SimulationDescriptor>`
  console.log(desc)
})