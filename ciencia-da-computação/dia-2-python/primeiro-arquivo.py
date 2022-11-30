# import random

# random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

# print("O número sorteado era: ", guess)

# import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)

# x = 5

# import sys


# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)

# print(f"{x:.^10}")

# name = (input("Digite o seu nome "))
# for letter in name:
#     print(letter)

# a, b = "cd"
# print(a)  # saída: c
# print(b)  # saída: d

# head, tail, *teste = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
# print(head)  # saída: 1
# print(tail)  # saída: [2, 3]
# print(teste)  # saída: [2, 3]


# arquivos = []
# for index in range(10240):
#     arquivos.append(open(f"arquivo{index}.txt", "w"))

# file = open("arquivo.txt", mode="w")
# file.write("bora Bill")
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# content = file.read()
# print(content)
# file.close()

# file = open("arquivo.txt", mode="w")
# LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
# file.writelines(LINES)
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(line)  # não esqueça que a quebra de linha também é um caractere da linha
# file.close()  # não podemos esquecer de fechar o arquivo

# file = open("arquivo.dat", mode="wb")
# file.write(b"C\xc3\xa1ssio 30")  # o prefixo b em uma string indica que seu valor está codificado em bytes
# file.close()

# # leitura
# file = open("arquivo.dat", mode="rb")
# content = file.read()
# print(content)  # saída: b'C\xc3\xa1ssio 30'
# file.close()  # não podemos esquecer de fechar o arquivo
# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")

# try:
#     arquivo = open("arquivo.txt", "r")
# except OSError:
#     # será executado caso haja uma exceção
#     print("arquivo inexistente")
# else:
#     # será executado se tudo ocorrer bem no try
#     print("arquivo manipulado e fechado com sucesso")
#     arquivo.close()
# finally:
#     # será sempre executado, independentemente de erro
#     print("Tentativa de abrir arquivo")

# with open("arquivo.txt") as file:
#     all = []
#     for line in file:
#         student = line
#         student = student.split(" ")
#         if int(student[1]) < 6:
#             all.append(student[0] + "\n")

# with open("all.txt", mode="w") as allFile:
#     print(all)
#     allFile.writelines(all)

import json  # json é um modulo que vem embutido, porém precisamos importá-lo


# with open("pokemons.json") as file:
#     # content = file.read()  # leitura do arquivo
#     pokemons = json.load(file)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
#     # acessamos a chave results que é onde contém nossa lista de pokemons
#     grass_type_pokemons = [
#         pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
#     ]

#     # with open("outro_grass_type_pokemons.json", "w") as file:
#     #     json_to_writer = json.dumps(grass_type_pokemons)
#     #     file.write(json_to_writer)

#     with open("outro2_grass_type_pokemons.json", "w") as file:
#         json.dump(grass_type_pokemons, file)

# import csv

# with open("graduacao_unb.csv", encoding = "utf-8") as file:
#     graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
#     # Usando o conceito de desempacotamento
#     header, *dd = graduacao_reader

# print(dd)
# print('================================================',header)

# import csv

# # lê os dados
# with open("graduacao_unb.csv", encoding = "utf-8") as file:
#     graduacao_reader = csv.DictReader(file, delimiter=",", quotechar='"')

#     # a linha de cabeçalhos é utilizada como chave do dicionário
#     # agrupa cursos por departamento
#     group_by_department = {}
#     for row in graduacao_reader:
#         department = row["unidade_responsavel"]
#         if department not in group_by_department:
#             group_by_department[department] = 0
#         group_by_department[department] += 1

# # abre um arquivo para escrita
# with open("new_department_report.csv", "w", encoding = "utf-8") as file:
#     # os valores a serem escritos devem ser dicionários
#     headers = [
#         "Departamento",
#         "Total de Cursos",
#     ]
#     # É necessário passar o arquivo e o cabeçalho
#     writer = csv.DictWriter(file, fieldnames=headers)
#     writer.writeheader()
#     # escreve as linhas de dados
#     for department, grades in group_by_department.items():
#         # Agrupa o dado com o turno
#         row = {"Departamento": department, "Total de Cursos": grades}
#         writer.writerow(row)

import csv

with open("arquivo.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)