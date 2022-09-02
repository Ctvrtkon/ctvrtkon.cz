---
templateKey: blog-post
title: 'Pozvánka na Čtvrtkon #9'
image: /img/ilustracni2.jpg
time: '2013-05-20T07:37:34+00:00'
date: '2013-05-20T07:37:34+00:00'
description: >-
    Devátý Čtvrtkon bude zasvěcen PHP. Budeme se bavit o tom, jak ukočírovat závislosti aplikace na různých knihovnách a balíčcích (Václav Novotný) a o tom, jak provádět statickou analýzu...
---
Devátý Čtvrtkon bude zasvěcen **PHP**. Budeme se bavit o tom, **jak ukočírovat závislosti aplikace** na různých knihovnách a balíčcích (Václav Novotný) a o tom, **jak provádět statickou analýzu zdrojového kódu v PHP** (Ondřej Mirtes).

Jako vždy vás prosíme o přihlášení na akci na stránkách [srazy.info](http://srazy.info/ctvrtkon/3584 "Přihláška na Čtvrtkon na srazy.info").

Základní informace **Datum:** 6. června 2013 **Čas:** 18:00 **Místo:** Horká Vana, České Budějovice **Vstupné:** Zdarma **Přihlášení:** Přihlásit se můžete na [Srazy.info](http://srazy.info/ctvrtkon/3584 "Přihlaste se, prosím, na Srazy.info")[Chci se přihlásit na Čtvrtkon](http://srazy.info/ctvrtkon/3584)Téma #1 – Composer – dependency management v PHP **Speaker: Václav Novotný**

Dependency management byl ještě donedávna v PHP komunitě opomíjený problém, který si člověk musel řešit po svém. Pak se objevil Composer a sjednotil způsob řešení závislostí drtivé většiny projektů. My si Composer představíme, ukážeme si, jak se s ním pracuje a jako bonus přihodím několik historek z nátáčení „jak to určitě nedělat“.

Téma #2 – Statická analýza v PHP **Speaker: Ondřej Mirtes**

Pokud jste někdy programovali ve staticky typovaných jazycích jako je C# nebo Java, určitě vám v PHP schází hledání chyb napříč zdrojovými kódy celé aplikace. Staticky typované jazyky ví přesný typ každé proměnné a dokážou tak nacházet zjevné chyby jako zmínky o neexistujících třídách, volání metod s nesprávnými počty a typy parametrů, přístup k nedefinovaným atributům apod. Takový kód vám vůbec nedovolí zkompilovat. Situace v PHP je jiná. Protože jde o interpretovaný jazyk, s každým požadavkem se pro jeho splnění spouští jen jedna konkrétní cesta v kódu. Pokud se v něm nachází taková fatální chyba, dozvíte se to, až když se k ní doklikáte. Současné aplikace v PHP ale také mohou těžit ze spousty metadat v kódu (jako jsou typehinty a anotace) a do určité míry tento typ chyb odhalovat také. Ukážeme si nástroje, které to umí a jak je můžete začlenit do vašeho workflow pomocí continuous integration. 