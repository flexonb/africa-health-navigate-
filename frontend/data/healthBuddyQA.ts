export interface QA {
  question: { en: string; fr: string; sw: string };
  answer: { en: string; fr: string; sw: string };
}

export interface QACategory {
  id: string;
  title: { en: string; fr: string; sw: string };
  description: { en: string; fr: string; sw: string };
  questions: QA[];
}

export const healthBuddyQA: QACategory[] = [
  {
    id: 'sexual_health',
    title: {
      en: 'Sexual Health',
      fr: 'Santé Sexuelle',
      sw: 'Afya ya Ngono'
    },
    description: {
      en: 'Questions about sexual health, contraception, and STIs.',
      fr: 'Questions sur la santé sexuelle, la contraception et les IST.',
      sw: 'Maswali kuhusu afya ya ngono, uzazi wa mpango, na magonjwa ya zinaa.'
    },
    questions: [
      {
        question: {
          en: 'What are the most common STIs?',
          fr: 'Quelles sont les IST les plus courantes ?',
          sw: 'Magonjwa ya zinaa ya kawaida ni yapi?'
        },
        answer: {
          en: 'Common STIs include Chlamydia, Gonorrhea, Syphilis, Herpes, HPV, and HIV. It is important to use protection like condoms and get tested regularly if you are sexually active. Most STIs are treatable with antibiotics or antiviral medications. It\'s crucial to see a doctor for diagnosis and treatment to prevent long-term health problems and avoid spreading it to others.',
          fr: 'Les IST courantes incluent la Chlamydia, la Gonorrhée, la Syphilis, l\'Herpès, le VPH et le VIH. Il est important d\'utiliser une protection comme les préservatifs et de se faire dépister régulièrement si vous êtes sexuellement actif. La plupart des IST sont traitables avec des antibiotiques ou des médicaments antiviraux. Il est crucial de consulter un médecin pour un diagnostic et un traitement afin de prévenir les problèmes de santé à long terme et d\'éviter de la transmettre à d\'autres.',
          sw: 'Magonjwa ya zinaa ya kawaida ni pamoja na Chlamydia, Kisonono, Kaswende, Herpes, HPV, na VVU. Ni muhimu kutumia kinga kama kondomu na kupima mara kwa mara ikiwa unafanya ngono. Magonjwa mengi ya zinaa yanatibika kwa antibiotiki au dawa za kuzuia virusi. Ni muhimu kumuona daktari kwa utambuzi na matibabu ili kuzuia matatizo ya afya ya muda mrefu na kuepuka kuieneza kwa wengine.'
        }
      },
      {
        question: {
          en: 'How effective are condoms?',
          fr: 'Quelle est l\'efficacité des préservatifs ?',
          sw: 'Kondomu zina ufanisi gani?'
        },
        answer: {
          en: 'When used correctly and consistently, male condoms are about 98% effective at preventing pregnancy. They also significantly reduce the risk of most STIs, including HIV.',
          fr: 'Lorsqu\'ils sont utilisés correctement et systématiquement, les préservatifs masculins sont efficaces à environ 98% pour prévenir la grossesse. Ils réduisent également de manière significative le risque de la plupart des IST, y compris le VIH.',
          sw: 'Zikitumiwa ipasavyo na kila mara, kondomu za kiume zina ufanisi wa asilimia 98 katika kuzuia mimba. Pia hupunguza kwa kiasi kikubwa hatari ya magonjwa mengi ya zinaa, ikiwemo VVU.'
        }
      },
      {
        question: {
          en: 'What is emergency contraception?',
          fr: 'Qu\'est-ce que la contraception d\'urgence ?',
          sw: 'Njia ya dharura ya kuzuia mimba ni nini?'
        },
        answer: {
          en: 'Emergency contraception (the "morning-after pill") can prevent pregnancy after unprotected sex. It should be taken as soon as possible, ideally within 72 hours, but can be effective up to 5 days. It is not an abortion pill and does not protect against STIs.',
          fr: 'La contraception d\'urgence (la "pilule du lendemain") peut prévenir une grossesse après un rapport sexuel non protégé. Elle doit être prise dès que possible, idéalement dans les 72 heures, mais peut être efficace jusqu\'à 5 jours. Ce n\'est pas une pilule abortive et ne protège pas contre les IST.',
          sw: 'Njia ya dharura ya kuzuia mimba ("morning-after pill") inaweza kuzuia mimba baada ya ngono isiyo salama. Inapaswa kunywewa haraka iwezekanavyo, ikiwezekana ndani ya masaa 72, lakini inaweza kuwa na ufanisi hadi siku 5. Sio kidonge cha kutoa mimba na haikingi dhidi ya magonjwa ya zinaa.'
        }
      },
      {
        question: {
          en: 'What is masturbation? Is it normal?',
          fr: 'Qu\'est-ce que la masturbation ? Est-ce normal ?',
          sw: 'Kujichua ni nini? Je, ni kawaida?'
        },
        answer: {
          en: 'Masturbation is touching your own genitals for sexual pleasure. It\'s a completely normal and healthy part of human sexuality for people of all genders and ages. It can be a way to learn about your body, discover what feels good, and relieve sexual tension and stress. There are no negative physical or mental health side effects to masturbation. However, if it\'s done very roughly or too often, it could cause minor skin irritation, which usually heals quickly. If you feel it\'s interfering with your daily life, it might be helpful to talk to a trusted adult or counselor.',
          fr: 'La masturbation consiste à toucher ses propres organes génitaux pour le plaisir sexuel. C\'est une partie tout à fait normale et saine de la sexualité humaine pour les personnes de tous genres et de tous âges. Cela peut être un moyen d\'apprendre à connaître son corps, de découvrir ce qui fait du bien et de soulager la tension sexuelle et le stress. Il n\'y a pas d\'effets secondaires négatifs sur la santé physique ou mentale liés à la masturbation. Cependant, si c\'est fait très brutalement ou trop souvent, cela pourrait provoquer une irritation cutanée mineure, qui guérit généralement rapidement. Si vous sentez que cela interfère avec votre vie quotidienne, il pourrait être utile d\'en parler à un adulte de confiance ou à un conseiller.',
          sw: 'Kujichua ni kujigusa sehemu zako za siri kwa ajili ya raha ya kingono. Ni sehemu ya kawaida kabisa na yenye afya ya ujinsia wa binadamu kwa watu wa jinsia zote na rika zote. Inaweza kuwa njia ya kujifunza kuhusu mwili wako, kugundua kinachojisikia vizuri, na kupunguza msisimko wa kingono na msongo. Hakuna madhara hasi ya kimwili au kiakili kwa kujichua. Hata hivyo, ikiwa inafanywa kwa ukali sana au mara nyingi sana, inaweza kusababisha muwasho mdogo wa ngozi, ambao kwa kawaida hupona haraka. Ikiwa unahisi inaingilia maisha yako ya kila siku, inaweza kusaidia kuzungumza na mtu mzima unayemwamini au mshauri.'
        }
      },
      {
        question: {
          en: 'How do I know if I have an STI?',
          fr: 'Comment savoir si j\'ai une IST ?',
          sw: 'Nitajuaje kama nina ugonjwa wa zinaa (STI)?'
        },
        answer: {
          en: 'Some STIs have obvious symptoms like unusual discharge, sores, itching, or pain when urinating. However, many STIs have no symptoms at all. The only way to know for sure is to get tested. If you are sexually active, regular testing is recommended.',
          fr: 'Certaines IST présentent des symptômes évidents comme des écoulements inhabituels, des plaies, des démangeaisons ou des douleurs en urinant. Cependant, de nombreuses IST ne présentent aucun symptôme. La seule façon de le savoir avec certitude est de se faire dépister. Si vous êtes sexuellement actif, un dépistage régulier est recommandé.',
          sw: 'Baadhi ya magonjwa ya zinaa yana dalili dhahiri kama kutokwa na majimaji yasiyo ya kawaida, vidonda, muwasho, au maumivu wakati wa kukojoa. Hata hivyo, magonjwa mengi ya zinaa hayana dalili kabisa. Njia pekee ya kujua kwa uhakika ni kupima. Ikiwa unafanya ngono, kupima mara kwa mara kunapendekezwa.'
        }
      },
      {
        question: {
          en: 'Can I get pregnant the first time I have sex?',
          fr: 'Puis-je tomber enceinte la première fois que j\'ai des rapports sexuels ?',
          sw: 'Naweza kupata mimba mara ya kwanza nikifanya ngono?'
        },
        answer: {
          en: 'Yes, it is absolutely possible to get pregnant the very first time you have penis-in-vagina sex, even if ejaculation does not happen inside the vagina (pre-ejaculate can contain sperm). If you are not ready for a pregnancy, it\'s crucial to use contraception every time.',
          fr: 'Oui, il est tout à fait possible de tomber enceinte dès le premier rapport sexuel avec pénétration vaginale, même si l\'éjaculation n\'a pas lieu à l\'intérieur du vagin (le liquide pré-éjaculatoire peut contenir des spermatozoïdes). Si vous n\'êtes pas prête pour une grossesse, il est crucial d\'utiliser une contraception à chaque fois.',
          sw: 'Ndiyo, inawezekana kabisa kupata mimba mara ya kwanza kabisa unapofanya ngono ya uume kuingia ukeni, hata kama shahawa haikutoka ndani ya uke (majimaji ya kabla ya shahawa yanaweza kuwa na mbegu za kiume). Ikiwa hauko tayari kwa ujauzito, ni muhimu kutumia njia za uzazi wa mpango kila wakati.'
        }
      },
      {
        question: {
          en: 'Is it normal for my vagina to have a smell?',
          fr: 'Est-il normal que mon vagin ait une odeur ?',
          sw: 'Je, ni kawaida uke wangu kuwa na harufu?'
        },
        answer: {
          en: 'Yes, it\'s completely normal for a vagina to have a slight smell. The smell can change throughout your menstrual cycle. A healthy smell is often described as musky or fleshy. However, a very strong, fishy, or unpleasant odor, especially if accompanied by itching, burning, or unusual discharge, could be a sign of an infection like bacterial vaginosis or a yeast infection. Good hygiene, like washing with plain water and wearing cotton underwear, can help. If you\'re concerned about the smell, it\'s best to see a doctor.',
          fr: 'Oui, il est tout à fait normal qu\'un vagin ait une légère odeur. L\'odeur peut changer tout au long de votre cycle menstruel. Une odeur saine est souvent décrite comme musquée ou charnue. Cependant, une odeur très forte, de poisson ou désagréable, surtout si elle est accompagnée de démangeaisons, de brûlures ou de pertes inhabituelles, pourrait être le signe d\'une infection comme la vaginose bactérienne ou une infection à levures. Une bonne hygiène, comme se laver à l\'eau claire et porter des sous-vêtements en coton, peut aider. Si l\'odeur vous préoccupe, il est préférable de consulter un médecin.',
          sw: 'Ndiyo, ni kawaida kabisa kwa uke kuwa na harufu kidogo. Harufu inaweza kubadilika katika mzunguko wako wa hedhi. Harufu nzuri mara nyingi huelezewa kama ya uvundo au ya nyama. Hata hivyo, harufu kali sana, ya samaki, au isiyopendeza, hasa ikiwa inaambatana na muwasho, kuungua, au kutokwa na majimaji yasiyo ya kawaida, inaweza kuwa ishara ya maambukizi kama vile bacterial vaginosis au maambukizi ya fangasi. Usafi mzuri, kama kuosha kwa maji tupu na kuvaa chupi za pamba, unaweza kusaidia. Ikiwa una wasiwasi kuhusu harufu, ni bora kumuona daktari.'
        }
      }
    ]
  },
  {
    id: 'menstrual_health',
    title: {
      en: 'Menstrual Health',
      fr: 'Santé Menstruelle',
      sw: 'Afya ya Hedhi'
    },
    description: {
      en: 'Information about periods, cramps, and hygiene.',
      fr: 'Informations sur les règles, les crampes et l\'hygiène.',
      sw: 'Taarifa kuhusu hedhi, maumivu ya tumbo, na usafi.'
    },
    questions: [
      {
        question: {
          en: 'Is it normal to have irregular periods?',
          fr: 'Est-il normal d\'avoir des règles irrégulières ?',
          sw: 'Je, ni kawaida kuwa na hedhi isiyo ya kawaida?'
        },
        answer: {
          en: 'Irregular periods are common, especially in the first few years after starting menstruation. Stress, diet, exercise, and health conditions can also affect your cycle. If your periods are consistently very irregular, or if you miss more than 3 in a row, it\'s a good idea to see a doctor.',
          fr: 'Les règles irrégulières sont courantes, surtout dans les premières années après le début de la menstruation. Le stress, l\'alimentation, l\'exercice et les problèmes de santé peuvent également affecter votre cycle. Si vos règles sont constamment très irrégulières, ou si vous en manquez plus de 3 d\'affilée, il est conseillé de consulter un médecin.',
          sw: 'Hedhi isiyo ya kawaida ni jambo la kawaida, hasa katika miaka michache ya kwanza baada ya kuanza hedhi. Msongo wa mawazo, lishe, mazoezi, na hali za kiafya pia zinaweza kuathiri mzunguko wako. Ikiwa hedhi yako ni isiyo ya kawaida sana mara kwa mara, au ukikosa zaidi ya 3 mfululizo, ni wazo zuri kumuona daktari.'
        }
      },
      {
        question: {
          en: 'How can I relieve menstrual cramps?',
          fr: 'Comment puis-je soulager les crampes menstruelles ?',
          sw: 'Ninawezaje kupunguza maumivu ya hedhi?'
        },
        answer: {
          en: 'You can try using a heating pad on your lower abdomen, taking over-the-counter pain relievers like ibuprofen, gentle exercise like walking or yoga, and avoiding caffeine and salty foods. Staying hydrated by drinking plenty of water can also help reduce bloating and cramps. If pain is severe, consult a healthcare provider.',
          fr: 'Vous pouvez essayer d\'utiliser un coussin chauffant sur le bas de votre abdomen, de prendre des analgésiques en vente libre comme l\'ibuprofène, de faire de l\'exercice doux comme la marche ou le yoga, et d\'éviter la caféine et les aliments salés. Rester hydraté en buvant beaucoup d\'eau peut également aider à réduire les ballonnements et les crampes. Si la douleur est sévère, consultez un professionnel de la santé.',
          sw: 'Unaweza kujaribu kutumia pedi ya joto kwenye tumbo lako la chini, kunywa dawa za maumivu kama ibuprofen, kufanya mazoezi mepesi kama kutembea au yoga, na kuepuka kafeini na vyakula vya chumvi. Kukaa na maji ya kutosha kwa kunywa maji mengi kunaweza pia kusaidia kupunguza uvimbe na maumivu ya tumbo. Ikiwa maumivu ni makali, wasiliana na mtoa huduma za afya.'
        }
      },
      {
        question: {
          en: 'What is good menstrual hygiene?',
          fr: 'Qu\'est-ce qu\'une bonne hygiène menstruelle ?',
          sw: 'Usafi mzuri wa hedhi ni upi?'
        },
        answer: {
          en: 'Good menstrual hygiene includes changing your pad, tampon, or menstrual cup regularly (every 4-8 hours), washing your genital area with water daily, and washing your hands before and after changing products. This helps prevent infections.',
          fr: 'Une bonne hygiène menstruelle consiste à changer régulièrement votre serviette, tampon ou coupe menstruelle (toutes les 4 à 8 heures), à laver votre zone génitale à l\'eau tous les jours et à vous laver les mains avant et après avoir changé de produit. Cela aide à prévenir les infections.',
          sw: 'Usafi mzuri wa hedhi unajumuisha kubadilisha pedi, tamponi, au kikombe cha hedhi mara kwa mara (kila masaa 4-8), kuosha sehemu zako za siri kwa maji kila siku, na kunawa mikono kabla na baada ya kubadilisha bidhaa. Hii husaidia kuzuia maambukizi.'
        }
      },
      {
        question: {
          en: 'Why does my period smell?',
          fr: 'Pourquoi mes règles ont-elles une odeur ?',
          sw: 'Kwa nini hedhi yangu inanuka?'
        },
        answer: {
          en: 'It\'s normal for menstrual fluid to have a slight metallic or musky smell due to the blood and tissue. A strong, fishy, or unpleasant odor could be a sign of an infection, like bacterial vaginosis. Good hygiene, like changing pads/tampons regularly, can help. If the smell is very strong or concerning, see a doctor.',
          fr: 'Il est normal que le flux menstruel ait une légère odeur métallique ou musquée due au sang et aux tissus. Une odeur forte, de poisson ou désagréable pourrait être le signe d\'une infection, comme la vaginose bactérienne. Une bonne hygiène, comme changer régulièrement de serviettes/tampons, peut aider. Si l\'odeur est très forte ou préoccupante, consultez un médecin.',
          sw: 'Ni kawaida kwa damu ya hedhi kuwa na harufu kidogo ya chuma au uvundo kutokana na damu na tishu. Harufu kali, ya samaki, au isiyopendeza inaweza kuwa ishara ya maambukizi, kama vile bacterial vaginosis. Usafi mzuri, kama kubadilisha pedi/tamponi mara kwa mara, unaweza kusaidia. Ikiwa harufu ni kali sana au inakutia wasiwasi, muone daktari.'
        }
      },
      {
        question: {
          en: 'What is PMS and how can I manage it?',
          fr: 'Qu\'est-ce que le SPM et comment puis-je le gérer ?',
          sw: 'PMS ni nini na ninawezaje kuidhibiti?'
        },
        answer: {
          en: 'Premenstrual Syndrome (PMS) includes physical and emotional symptoms that many people experience in the days before their period. Symptoms can include mood swings, bloating, breast tenderness, and fatigue. To manage PMS, you can try regular exercise, a balanced diet with less salt and sugar, getting enough sleep, and stress-reducing activities like yoga or meditation. Over-the-counter pain relievers can help with cramps and headaches.',
          fr: 'Le Syndrome Prémenstruel (SPM) comprend des symptômes physiques et émotionnels que de nombreuses personnes ressentent dans les jours précédant leurs règles. Les symptômes peuvent inclure des sautes d\'humeur, des ballonnements, une sensibilité des seins et de la fatigue. Pour gérer le SPM, vous pouvez essayer de faire de l\'exercice régulièrement, d\'avoir une alimentation équilibrée avec moins de sel et de sucre, de dormir suffisamment et de pratiquer des activités réduisant le stress comme le yoga ou la méditation. Les analgésiques en vente libre peuvent aider à soulager les crampes et les maux de tête.',
          sw: 'Ugonjwa wa Kabla ya Hedhi (PMS) unajumuisha dalili za kimwili na kihisia ambazo watu wengi hupata katika siku za kabla ya hedhi. Dalili zinaweza kujumuisha mabadiliko ya hisia, kuvimbiwa, maumivu ya matiti, na uchovu. Ili kudhibiti PMS, unaweza kujaribu mazoezi ya mara kwa mara, mlo kamili wenye chumvi na sukari kidogo, kupata usingizi wa kutosha, na shughuli za kupunguza msongo kama yoga au kutafakari. Dawa za maumivu zinazopatikana bila agizo la daktari zinaweza kusaidia kwa maumivu ya tumbo na kichwa.'
        }
      }
    ]
  },
  {
    id: 'body_puberty',
    title: {
      en: 'Body & Puberty',
      fr: 'Corps & Puberté',
      sw: 'Mwili na Ujana'
    },
    description: {
      en: 'Understanding the changes your body goes through.',
      fr: 'Comprendre les changements que votre corps traverse.',
      sw: 'Kuelewa mabadiliko ambayo mwili wako unapitia.'
    },
    questions: [
      {
        question: {
          en: 'Is it normal for one breast to be bigger than the other?',
          fr: 'Est-il normal qu\'un sein soit plus gros que l\'autre ?',
          sw: 'Je, ni kawaida titi moja kuwa kubwa kuliko lingine?'
        },
        answer: {
          en: 'Yes, it is very common and normal for breasts to be slightly different in size or shape. This is true for most people and is usually not a sign of any health problem.',
          fr: 'Oui, il est très courant et normal que les seins soient légèrement différents en taille ou en forme. C\'est le cas pour la plupart des gens et ce n\'est généralement pas le signe d\'un problème de santé.',
          sw: 'Ndio, ni kawaida sana kwa matiti kuwa na ukubwa au umbo tofauti kidogo. Hii ni kweli kwa watu wengi na kwa kawaida sio ishara ya tatizo lolote la kiafya.'
        }
      },
      {
        question: {
          en: 'What is vaginal discharge and is it normal?',
          fr: 'Qu\'est-ce que les pertes vaginales et est-ce normal ?',
          sw: 'Ute wa ukeni ni nini na je, ni kawaida?'
        },
        answer: {
          en: 'Vaginal discharge is a fluid that helps keep the vagina clean and moist. It\'s normal for it to change in color (clear to milky white) and consistency throughout your menstrual cycle. If you notice a strong odor, itching, or a significant change in color (like green or yellow), you should see a doctor as it could be a sign of infection.',
          fr: 'Les pertes vaginales sont un liquide qui aide à garder le vagin propre et humide. Il est normal qu\'il change de couleur (clair à blanc laiteux) et de consistance tout au long de votre cycle menstruel. Si vous remarquez une forte odeur, des démangeaisons ou un changement de couleur important (comme vert ou jaune), vous devriez consulter un médecin car cela pourrait être le signe d\'une infection.',
          sw: 'Ute wa ukeni ni majimaji yanayosaidia kuweka uke safi na unyevu. Ni kawaida kubadilika rangi (kutoka wazi hadi nyeupe ya maziwa) na uzito katika mzunguko wako wa hedhi. Ukiona harufu kali, muwasho, au mabadiliko makubwa ya rangi (kama kijani au njano), unapaswa kumuona daktari kwani inaweza kuwa ishara ya maambukizi.'
        }
      },
      {
        question: {
          en: 'Why do I have hair growing in new places?',
          fr: 'Pourquoi ai-je des poils qui poussent à de nouveaux endroits ?',
          sw: 'Kwa nini ninaota nywele sehemu mpya?'
        },
        answer: {
          en: 'This is a normal part of puberty for everyone. Hormonal changes cause hair to grow in new areas like the armpits, pubic area, and for boys, on the face, chest, and legs. It\'s a sign that your body is maturing into an adult body.',
          fr: 'C\'est une partie normale de la puberté pour tout le monde. Les changements hormonaux provoquent la pousse de poils dans de nouvelles zones comme les aisselles, la zone pubienne, et pour les garçons, sur le visage, la poitrine et les jambes. C\'est un signe que votre corps se transforme en corps d\'adulte.',
          sw: 'Hii ni sehemu ya kawaida ya kubalehe kwa kila mtu. Mabadiliko ya homoni husababisha nywele kuota sehemu mpya kama kwapani, sehemu za siri, na kwa wavulana, usoni, kifuani, na miguuni. Ni ishara kwamba mwili wako unakomaa na kuwa wa mtu mzima.'
        }
      },
      {
        question: {
          en: 'What are wet dreams?',
          fr: 'Que sont les rêves humides ?',
          sw: 'Ndoto nyevu ni nini?'
        },
        answer: {
          en: 'Wet dreams (nocturnal emissions) are when a person ejaculates in their sleep. They are a normal and common part of puberty for boys and men. They are an involuntary sign that the reproductive system is working and are not something you can control.',
          fr: 'Les rêves humides (émissions nocturnes) se produisent lorsqu\'une personne éjacule pendant son sommeil. C\'est une partie normale et courante de la puberté pour les garçons et les hommes. C\'est un signe involontaire que le système reproducteur fonctionne et ce n\'est pas quelque chose que vous pouvez contrôler.',
          sw: 'Ndoto nyevu (kutokwa na shahawa usiku) ni wakati mtu anatoa shahawa akiwa amelala. Ni sehemu ya kawaida ya kubalehe kwa wavulana na wanaume. Ni ishara isiyo ya hiari kwamba mfumo wa uzazi unafanya kazi na si kitu unachoweza kudhibiti.'
        }
      },
      {
        question: {
          en: 'Why do I have more body odor now?',
          fr: 'Pourquoi ai-je plus d\'odeur corporelle maintenant ?',
          sw: 'Kwa nini nina harufu mbaya ya mwili sasa?'
        },
        answer: {
          en: 'During puberty, your sweat glands become more active, especially the apocrine glands in your armpits and groin. When sweat from these glands mixes with bacteria on your skin, it can cause body odor. This is a normal part of growing up. To manage it, you can shower daily with soap, use deodorant or antiperspirant, and wear clean clothes. It\'s a normal change everyone goes through.',
          fr: 'Pendant la puberté, vos glandes sudoripares deviennent plus actives, en particulier les glandes apocrines dans vos aisselles et votre aine. Lorsque la sueur de ces glandes se mélange avec les bactéries sur votre peau, cela peut provoquer une odeur corporelle. C\'est une partie normale de la croissance. Pour la gérer, vous pouvez vous doucher quotidiennement avec du savon, utiliser un déodorant ou un anti-transpirant, et porter des vêtements propres. C\'est un changement normal que tout le monde traverse.',
          sw: 'Wakati wa kubalehe, tezi zako za jasho huwa na shughuli nyingi zaidi, hasa tezi za apocrine kwenye kwapa na sehemu za siri. Jasho kutoka kwenye tezi hizi linapochanganyikana na bakteria kwenye ngozi yako, linaweza kusababisha harufu mbaya ya mwili. Hii ni sehemu ya kawaida ya kukua. Ili kuidhibiti, unaweza kuoga kila siku kwa sabuni, kutumia deodorant au antiperspirant, na kuvaa nguo safi. Ni mabadiliko ya kawaida ambayo kila mtu hupitia.'
        }
      }
    ]
  },
  {
    id: 'general_health',
    title: {
      en: 'General Health Concerns',
      fr: 'Préoccupations Générales de Santé',
      sw: 'Masuala ya Jumla ya Afya'
    },
    description: {
      en: 'Answers to common but sometimes embarrassing health questions.',
      fr: 'Réponses aux questions de santé courantes mais parfois embarrassantes.',
      sw: 'Majibu ya maswali ya kawaida lakini wakati mwingine ya aibu ya kiafya.'
    },
    questions: [
      {
        question: {
          en: 'Why do I still wet the bed sometimes?',
          fr: 'Pourquoi est-ce que je fais encore pipi au lit parfois ?',
          sw: 'Kwa nini bado ninakojoa kitandani wakati mwingine?'
        },
        answer: {
          en: 'Bedwetting (nocturnal enuresis) can happen for many reasons, even in older children and adults. It can be caused by a small bladder, deep sleep, stress, or underlying medical conditions like a urinary tract infection. It\'s important not to feel ashamed. Limiting fluids before bed and urinating right before sleep can help. If it persists, it\'s a good idea to talk to a healthcare provider.',
          fr: 'L\'énurésie nocturne (pipi au lit) peut se produire pour de nombreuses raisons, même chez les enfants plus âgés et les adultes. Elle peut être causée par une petite vessie, un sommeil profond, le stress ou des conditions médicales sous-jacentes comme une infection urinaire. Il est important de ne pas avoir honte. Limiter les liquides avant de se coucher et uriner juste avant de dormir peut aider. Si cela persiste, il est conseillé de parler à un professionnel de la santé.',
          sw: 'Kukojoa kitandani (enuresis ya usiku) kunaweza kutokea kwa sababu nyingi, hata kwa watoto wakubwa na watu wazima. Inaweza kusababishwa na kibofu kidogo, usingizi mzito, msongo wa mawazo, au hali za kiafya kama maambukizi ya njia ya mkojo. Ni muhimu kutojisikia aibu. Kupunguza unywaji wa maji kabla ya kulala na kukojoa kabla tu ya kulala kunaweza kusaidia. Ikiendelea, ni wazo zuri kuzungumza na mtoa huduma za afya.'
        }
      },
      {
        question: {
          en: 'What causes bad breath?',
          fr: 'Qu\'est-ce qui cause la mauvaise haleine ?',
          sw: 'Nini husababisha harufu mbaya mdomoni?'
        },
        answer: {
          en: 'Bad breath is usually caused by bacteria in the mouth. Poor dental hygiene is a common cause. Other causes include certain foods, smoking, dry mouth, and some medical conditions. Brushing your teeth and tongue twice a day, flossing daily, and drinking plenty of water can help. If it doesn\'t improve, see a dentist or doctor.',
          fr: 'La mauvaise haleine est généralement causée par des bactéries dans la bouche. Une mauvaise hygiène dentaire est une cause fréquente. D\'autres causes incluent certains aliments, le tabagisme, la bouche sèche et certaines conditions médicales. Se brosser les dents et la langue deux fois par jour, utiliser du fil dentaire quotidiennement et boire beaucoup d\'eau peut aider. Si cela ne s\'améliore pas, consultez un dentiste ou un médecin.',
          sw: 'Harufu mbaya mdomoni kwa kawaida husababishwa na bakteria mdomoni. Usafi duni wa meno ni sababu ya kawaida. Sababu zingine ni pamoja na vyakula fulani, uvutaji sigara, mdomo mkavu, na baadhi ya hali za kiafya. Kupiga mswaki meno na ulimi mara mbili kwa siku, kutumia uzi wa meno kila siku, na kunywa maji mengi kunaweza kusaidia. Ikiwa haibadiliki, muone daktari wa meno au daktari.'
        }
      },
      {
        question: {
          en: 'Is it normal to have thoughts about hurting myself?',
          fr: 'Est-il normal d\'avoir des pensées d\'automutilation ?',
          sw: 'Je, ni kawaida kuwa na mawazo ya kujidhuru?'
        },
        answer: {
          en: 'Having thoughts of self-harm or suicide is a sign of significant emotional distress. While it\'s more common than you might think, it\'s very important to take these thoughts seriously. It does not mean you are weak or flawed. It means you are in pain and need support. Please talk to a trusted adult, a friend, a doctor, or a mental health professional immediately. There is help available, and you don\'t have to go through this alone.',
          fr: 'Avoir des pensées d\'automutilation ou de suicide est un signe de détresse émotionnelle importante. Bien que ce soit plus courant que vous ne le pensez, il est très important de prendre ces pensées au sérieux. Cela ne signifie pas que vous êtes faible ou défectueux. Cela signifie que vous souffrez et que vous avez besoin de soutien. Veuillez en parler immédiatement à un adulte de confiance, un ami, un médecin ou un professionnel de la santé mentale. De l\'aide est disponible, et vous n\'avez pas à traverser cela seul.',
          sw: 'Kuwa na mawazo ya kujidhuru au kujiua ni ishara ya msongo mkubwa wa kihisia. Ingawa ni jambo la kawaida kuliko unavyoweza kufikiria, ni muhimu sana kuyachukulia mawazo haya kwa uzito. Haimaanishi wewe ni dhaifu au una kasoro. Inamaanisha una maumivu na unahitaji msaada. Tafadhali zungumza na mtu mzima unayemwamini, rafiki, daktari, au mtaalamu wa afya ya akili mara moja. Msaada unapatikana, na si lazima upitie hili peke yako.'
        }
      },
      {
        question: {
          en: 'Why do I fart so much? Is it normal?',
          fr: 'Pourquoi est-ce que je pète autant ? Est-ce normal ?',
          sw: 'Kwa nini ninajamba sana? Je, ni kawaida?'
        },
        answer: {
          en: 'Farting (passing gas) is a completely normal bodily function. It\'s a result of gas building up in your digestive system. This gas comes from swallowing air and from the breakdown of food by bacteria in your gut. Certain foods like beans, lentils, broccoli, and carbonated drinks can cause more gas. While it can be embarrassing, everyone farts. If you have excessive gas along with pain, bloating, or changes in your bowel habits, it might be a good idea to talk to a doctor.',
          fr: 'Péter (dégager des gaz) est une fonction corporelle tout à fait normale. C\'est le résultat de l\'accumulation de gaz dans votre système digestif. Ce gaz provient de l\'air que vous avalez et de la décomposition des aliments par les bactéries dans votre intestin. Certains aliments comme les haricots, les lentilles, le brocoli et les boissons gazeuses peuvent provoquer plus de gaz. Bien que cela puisse être embarrassant, tout le monde pète. Si vous avez des gaz excessifs accompagnés de douleurs, de ballonnements ou de changements dans vos habitudes intestinales, il pourrait être judicieux de consulter un médecin.',
          sw: 'Kujamba (kupitisha gesi) ni kazi ya kawaida kabisa ya mwili. Ni matokeo ya gesi kujijenga katika mfumo wako wa usagaji chakula. Gesi hii hutokana na kumeza hewa na kutokana na kuvunjwa kwa chakula na bakteria kwenye utumbo wako. Vyakula fulani kama maharagwe, dengu, brokoli, na vinywaji vya kaboni vinaweza kusababisha gesi zaidi. Ingawa inaweza kuwa aibu, kila mtu hujamba. Ikiwa una gesi nyingi pamoja na maumivu, kuvimbiwa, au mabadiliko katika tabia yako ya haja, inaweza kuwa wazo zuri kuzungumza na daktari.'
        }
      }
    ]
  }
];
