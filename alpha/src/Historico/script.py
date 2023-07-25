# abrir el archivo entrada.txt y obtener los colores únicos utilizados en el archivo

import re

def main():
    with open("entrada.txt", "r") as f:
        text = f.read()

    colores = set()
    for match in re.finditer(r'fill="(#([0-9,a-z]){6})"', text):
        colores.add(match.group(1).upper())

    colores = list(colores)

    # agregar prefacio y codigo rgb en el siguiente formato para latex
    # Color 1 \t\\ \#FFFFFF \t\\ \tikz\node[rounded corners, fill={rgb,255:red,xxx; green,xxx; blue,xxx}, text={rgb,255:red,xxx; green,xxx; blue,xxx}, draw=black] {aaaaaa}; 
    for i,color in enumerate(colores):

        colores[i] = 'Color '+str(i+1)+'\t\\'+color
    
    with open("salida.txt", "w") as f:
        f.write("\n".join(colores))



if __name__ == "__main__":
    main()
