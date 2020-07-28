#optimizaciones

##1:  reducir los tiempos de carga al iniciar la aplicacion 
se propone cambiar la estructura de las llamadas a api que en este momento son secuenciales; por realizar las 3 al mismo tiempo pero creando una variable contadora (arrived) de tipo hook useRef para llevar una cuenta de cuantas de las 3 han sido realizadas asi mismo se checkee al final de cada llamada el puesto de la llamada realizada de ahi cuando se finalice el proceso de llamada se llame a una version ampliada del metodo ya presente formated que lleve a cabo el calculo de valores de dolar , bs y euro para luego acomodar los datos con la estructura y funcion que ya presenta,
###nota : es importante recalcar que utilizar useRef fuera de un useEffect no se considera buena practica sin embargo por su naturaleza que le permite mantener os datos a pesar de distintos renderizados plantea una solucion a este problema

##2 : reemplazar las llamadas a supported coins en las operaciones de calculo de useCalculated Values
esto para optimizar las operaciones de calculo al tocar un numero ya que estos presentan un delay debido al perfomance al ser pulsados
##3: averiguar falla del perfomance al introducir un input
posiblemente es debido a que componentes de la vista home estan siendo re renderizados en cada input asi mismo la imagen del resultado tambien es re renderizada lo cual tiene impactos directos en el perfomance al tocar un input

##4 crear validacion para borrar values totalmente 0 ejemplo:(0.0000)
el metodo parseFloat redondea estos numero a solo 0 por lo que al borrar uno solo de estos elimina toda la cadena
se debe crear una validacion para que esto no pase
