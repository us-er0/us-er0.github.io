function getRecA(){
    return E(1)
    .add(
        E(upg[3].nowL)
        .mul(
            E(2).pow(
                E(upg[4].nowL)
            )
        )
        .mul(E(3))
    )
    .mul(
        E(upg[0].nowL)
    )
    .mul(
        E(upg[1].nowL)
        .pow(E(2))
    )
    .mul(
        E(1)
        .add(
            E(upg[2].nowL)
            .mul(E(0.5))
        )
    )

}