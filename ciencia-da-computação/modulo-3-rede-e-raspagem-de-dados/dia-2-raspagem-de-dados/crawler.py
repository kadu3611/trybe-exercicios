import requests
# import time

# # À partir da décima requisição somos bloqueados de acessar o recurso
# # Código de status 429: Too Many Requests
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)
#     time.sleep(6)

# Por 10 segundos não temos certeza se a requisição irá retornar
try:
    response = requests.get("https://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)

import requests

