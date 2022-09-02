---
templateKey: blog-post
title: 'Statická analýza v PHP'
image: /img/author-ondrej-mirtes.jpg
time: '2013-06-07T13:34:12+00:00'
date: '2013-06-07T13:34:12+00:00'
description: >-
    Pokud jste někdy programovali ve staticky typovaných jazycích jako je C# nebo Java, určitě vám v PHP schází hledání chyb napříč zdrojovými kódy celé aplikace. Staticky typované jazyky ví...
---
Pokud jste někdy programovali ve staticky typovaných jazycích jako je C# nebo Java, určitě vám v PHP schází hledání chyb napříč zdrojovými kódy celé aplikace. Staticky typované jazyky ví přesný typ každé proměnné a dokážou tak nacházet zjevné chyby jako zmínky o neexistujících třídách, volání metod s nesprávnými počty a typy parametrů, přístup k nedefinovaným atributům apod. Takový kód vám vůbec nedovolí zkompilovat. Situace v PHP je jiná. Protože jde o interpretovaný jazyk, s každým požadavkem se pro jeho splnění spouští jen jedna konkrétní cesta v kódu. Pokud se v něm nachází taková fatální chyba, dozvíte se to, až když se k ní doklikáte. Současné aplikace v PHP ale také mohou těžit ze spousty metadat v kódu (jako jsou typehinty a anotace) a do určité míry tento typ chyb odhalovat také. Ukážeme si nástroje, které to umí a jak je můžete začlenit do vašeho workflow pomocí continuous integration.

Ondřej Mirtes [Ondra](http://mirtes.cz "Osobní stránky Ondřeje Mirtese") se již řadu let zabývá vývojem webových aplikací. Aktivně působí v komunitě okolo Nette a podílí se na jeho vývoji. V [Medio Interactive](http://www.medio.cz "Medio Interactive") vyvíjí komplexní webové aplikace a informační systémy.