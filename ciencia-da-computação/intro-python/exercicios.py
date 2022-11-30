LISTA = [1, 2, 3, 4]
NAMES = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def max_all(x, y):
    """Calculate area of circle."""
    return max(x, y)


def media(valor):
    """Calculate area of circle."""
    total = 0
    for list in valor:
        total += list
    return total / len(valor)


def mac_names(valor):
    max_len = 0
    for name in valor:
        if max_len <= len(name):
            max_len = len(name)
    name_len = [item for item in valor if len(item) == max_len]
    # max_len = NAMES[0]
    # for name in valor:
    #     if len(name) > len(max_len):
    #         max_len = name
    return name_len[0]


print("O maior número é", max_all(1, 2))
print("O media número é", media(LISTA))
print("O media número é", mac_names(NAMES))
