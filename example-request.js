// Below are several example tokens that can be used to test the API, but feel free to generate your own tokens! //
//
// invalid: token has expired
const token_value = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jZXJ0LnBlbSJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE2MTM4ODQ0MDJ9.lYAqoyFtCyp0fVRTlg3J-dplO6s75FLe0SDTz1dOLwLOhT9ZzMgWw2jDpmIkHtLdwz1qgdjCqdwserzH9TGSmnquvVYymjU4GmVAnOUyZ2GQGdV6J9TNBB0wzdCEh0ajNYXstDcnAd4JpyNx_xaFiKfcIkz4Ym9SPCAevn5Gs8VymDeGTu5EEzRUwEZBjSd30Gl63X6cJ4ggVv0OmDd4f4xZX4h6boAMn6upwGgRg4Ot0tugQ2wF9orIgD2yriHoC0mkdxkdyG-piQG0jJvOn1qD8so7jq6SUGxM6y_GH414sTESo_tju4VjymhvKa8UIj9FuZEAV8JDbqfcywwlVB3rSFgo-y5Ppq0JMzeoPhs-0y4wXUZHxgBoy2l72CyEh2YkuT60diuGLihwdO6FJ1d30PRpPQ2aBAV4X9exr7wB5bhC3sojqKDkt7uSxz4mwHFPgnmRO7TXSvK4sofIiV7ll0Zxp2QI58_c1vmIM-Jp08n8Mz6fGLigEA6g6QI78vHqABSoPlkrGmZFSs_w_ta9WJxiBlO0CjoIkL-9UWaV_eAwldT9X_dYi0idldmj8nPFtXLDEQfKaJMFAp_QPhZKd70cXVq4xwqp2y00v9gxXyP1jDszvyLC_7UI9d62tgxJsc_cJAH1Rjtb8J4bRjKUa_9EgDw1zaseMrqIUOw'
// valid token
const token_value2 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jZXJ0LnBlbSJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MzMyNjMyMDB9.VwThyTU9_H0VO8HVSFzQsU0ZHqKTdd2EMMRu7zEJSDxVMj4Ghlt2QYFvyvbxQcIKuLHRKi4u6Zcu3HxvFNOY4p-rFLK0xFJynBfDGQXKtYUT0TCaSylPNC2xWK0CET-d7Hkl1yXMqhiGLBstO-7HhNLNyeSlGeHrmZQvPOAvqJe1KHDY-V1DDrWU3tn1ijYIjjohjK2l_zNHfNaNgsqpwnRz90wwLbIEDLR0Gr0HBN5AzyU70-pid0mDZh9or5sXrsmoXcX-RcfcwSKFWl5ppFPNwBXlP0YNGlxQ4ZJdQ0bVSr14enUTpGzXttUCkfhNIF2HotWkC71W5dYDQmmAAAZwRdoG2DW506CPOZL8-5tL7m5Hq9kP2wQcF-mN9FM7dIPEg1FSnbsJPhOIBKfNbQ7w3nMUSeaHH5NdiUKLP_76kRlStQAsb7ykiE20uQl6n1guM8cBFupnQVo8vkNC7fZ1S7vqjqHbosGJ6lcfl7ybVEJsFqb6RdW3GehSylfsZYLAMlHB3EvB9sBwmUjTLPyINBm2i3fVQtVqfxITK6PusDvrCfVtWBVO6wYeYN1PmJFTjQ0FH6wtGxw9MoIqIGGvupfYYIMGB6u93YM6f9N9WboLDCsnLrAYb7igg45nHQzCxMpBHZu0eatqBcM-u-hUSHTBsqO8uYuArPnla24'
// immature token (not yet valid)
const token_value3 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jZXJ0LnBlbSJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzMzMjYzMTAwLCJleHAiOjE3MzMyNjMyMDB9.ZAdjSEPjBrJT3BqBuI6s9G9GS3tZb5zpoqvAjTNNKDw-k77ESFpmTij_ApHvBbqY6Lsgb-OE3CZ6xnoLKaElJfr8NFs1qEMfgfZSsAKyJtt-I6VHTIOP9tnCBhL8gTMbJgOOPRLu5xkzhrcDUl6Wt7XIHCYzo2znJEk5FnIyQ-8Skw0FYHHMElZ8Uf4NJ7hAj0B1fej9ITEDLCubYQc8bsx8gx2zP7WTpnQaQPr2way40Zl3hWWmkHBjyFZIwfgpw0QLAYWCB7ohA66xlub2mr3iGtoIHwkH3BwusUJwDHuJ6h-WMzHah0Ou3NnSbt5EqmMeJtcDujxAK4WgTOP4GXUAc90FLbWfJcqzAjq9d_WtknG5pxxxhlxvbzs0KEWGVjWSrVvqF7UzzLA6in8a6GnQXWHacP2uIhIpj_MyDSqbMzbZg4Ov7UQeFUKGv26Hze2wTdCueIpILrekPekItM55ctdDZoPuonAKChPFulstaJLK11XQwa2pIsA_LZoscVBTsWrcQGn-J3OzdolMFrnIu0Gv_y1Lk5JNfw89O9gEXumEtvB8zTAepnlngViLpGtZY56VSdaDn6k51oLA2sGmzfh_O5a87UghFNfXXBcUT3q13FcymvED7TNKQNhRSZocQilWdtYknb2w2ZZVgQhBSfcbosjORJpWMggNJxE'
// invalid token: private and public keys do not match
const token_value4 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsIng1dSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jZXJ0LnBlbSJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MzMyNjMyMDB9.VBI_I_B9ntkM-nombdnIdEnq9r7K-XL_TZ9vX04Xiy5EzdtgNrTeN3hmjWw1UPnsrAjQKgrmIGJ4mcJ1uWurqkp62Psi53PyDveiiJwho6XhTcurmQpFGZrkNuAdMmr6s221ZvGsGiZjiXAA64ZqXOT9AVCmFXIkNPUEXIZB_MjphPc4eG0pFj4Av5HiYYoT8MbPpMJZbcW3m_VZr_JeU_2_vzNpft8t0wLK3EgqLtr4ymaRDs7MUDZ8OPaZWSA4lvDd6Saz-MwKBsq5QOA20kg6ZR6CXF3Vmmfw7EQuUvm23j1ILasNSoXuQU90IvWP6OHmbw68NJmPpYp_PlHOWw'
// missing x5u header
const token_value5 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MzMyNjMyMDB9.mS-sDVixM45YWEU8ZqQD0tgO4UzgdPKBaUTKVH6dfgk1c5c7jKWIvDhj82-Fk0uagACA_N7fRiqxyGulP0VjnLnIW6MVLmIFh7XrzNd19gAGAMAnXv5jrX_2LYL7J1ip6ZIqQNPzV_JH9v0irpnD64FfCo6bWl_Qq8QtOTxGc4f_iRgikBCyvc2g-6a_s0eqnxBO_0hIi0w_w1dxSeKd4y2sTWIOSgplHdxL4UGAZP1aRrSMgGq7rl2_pgK-RJZvxjVAMOTWgeOIrpUY0a8XGEqlomZzjSr4Qb8At8SefmNVFiK-5fas_PsFL0Zvl1Umg9japGr-3gVmrOx1dZnBsPon2jkoZfgrCflGvOqiz9RJlAfa-RgHNQpVZVUt0TbzNmiTm5XDo09sKFFccl5uNx-qFxtS9_YvDhfXkRRQwPudEKDlt3eC6oNDjsVeS9tI_MS0J2-zk-VjVQ7KhyPYBbuzkGic3v8pMq2MW7hu0R2Vi-2-4FT9r-S4EAPPDzMsTHEavAbiotQcgrGVo4CCAYNZ8cPIIqCT3c7Ult6P6VAa4ZpMW_h1R4OBohk7B0PRSweuWeF3HdXanb-CZo5d4_vN3cLBl716lbkTHqz63_U4ZL72XUDLgKkjlSAnHvtllEtcgi-9s71KcDlgGP_5O829VDfHO8j7bcB0l2kDfi4'

const options = {
    // GET is the default method. Therefore no need to specify it
    headers: {
        'Host': 'localhost',
        'Accept': 'application/json',
        // Change the token value below to test the API with different tokens //
        'Authorization': 'Bearer ' + token_value,
    }
}

async function validateJWT() {
    const response = await fetch('http://localhost:5000/auth', options)
    console.log('HTTP status:', response.status, response.statusText)
    const json = await response.json()
    console.log(json)
}

validateJWT()
