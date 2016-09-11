// Charger images

// Changer background
$( function() {
  $('body').click( function() {
    $(this).css('background-image', 'url(https://raw.githubusercontent.com/QueerCode/quizcode/master/images/background_quiz.gif)')
  } );
} );
// Questions - Choix _ Réponses
$('#quiz').quiz({
  counterFormat: '<I><p align="right">Question %current sur %total</I></p>',
  questions: [
    {
      'q': '<H4>Rubrique: livres et BD</H4><H3>Deux allemandes qui s’aimèrent durant la Seconde Guerre Mondiale se sont donné de doux noms devenus titre d’un roman et d’un film de fiction. Quels sont–ils ?</H3>',
      'options': [
        "Milena et Margarete",
		"Aimée et Jaguar", 
		"Ruth et Monika"
      ],
      'correctIndex': 1, 
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" id="licrone" style="float:left;"/>' + "<p> <b>Aimée et Jaguar</b></p>L’écrivaine allemande juive Erica Fisher rencontre en 1991 pour la 1ère fois Elisabeth Wust, dite Aimée. Cette dernière témoignera de son histoire d’amour avec Felice Schragenheim dite Jaguar. Elle confiera à l’écrivaine son journal intime, sa correspondance et des documents de Felice afin qu’elle puisse rédiger l’ouvrage <I>Aimée et Jaguar</I>. Les deux amoureuses allemandes se sont donné ces noms « doux » et de code, qui ont été choisis comme titre au livre d’Erica Fisher et également au film de fiction tirée de cette histoire bouleversante."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" id="licrone" style="float:left;"/>' + "<p><b>Aimée et Jaguar</b></p>L’écrivaine allemande juive Erica Fisher rencontre en 1991 pour la 1ère fois Elisabeth Wust, dite Aimée. Cette dernière témoignera de son histoire d’amour avec Felice Schragenheim dite Jaguar. Elle confiera à l’écrivaine son journal intime, sa correspondance et des documents de Felice afin qu’elle puisse rédiger l’ouvrage <I>Aimée et Jaguar</I>. Les deux amoureuses allemandes se sont donné ces noms « doux » et de code, qui ont été choisis comme titre au livre d’Erica Fisher et également au film de fiction tirée de cette histoire bouleversante.")
	},
    {
      'q': '<H4>Rubrique: film</H4><H3>Qui interprète la résistante française Rose Valand dans le film hollywoodien <I>Monuments men</I> ?</H3>',
      'options': [
        "Julianne Moore",
        "Robin Wright",
        "Cate Blanchett"
      ],
      'correctIndex': 2,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Cate Blanchett</b></p>L’actrice américaine y incarne une héroïne hétérosexuelle, un stéréotype de la française aux mœurs légères, bien loin de l’identité et de l’orientation sexuelle de Rose Valland."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Cate Blanchett</b></p>L’actrice américaine y incarne une héroïne hétérosexuelle, un stéréotype de la française aux mœurs légères, bien loin de l’identité et de l’orientation sexuelle de Rose Valland.")
   	},
    {
      'q': '<H4>Rubrique: documentaire</H4><H3>Comment se nomme la seule lesbienne qui témoigne dans le très émouvant documentaire <I>Paragraphe 175</I> ?</H3>',
      'options': [
	  "Annette Eick",
	  "Marie Glawitsh",
	  "Mary Punjer"
      ],
      'correctIndex': 0,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Annette Eick</b></p>Elle réussit à s'enfuir d’Allemagne en 1938 pour l’Angleterre. “Ce qui était dur, bien entendu, c’est que je voyais mes parents me faire signe sur la plate-forme et quand le train partit je savais que je n’allais jamais les revoir”. Le titre du documentaire fait référence à l’article du Code pénal allemand qui criminalisait l’homosexualité masculine de 1871 à 1994. L’article 129 du Code pénal autrichien de 1852 à 1971 interdisait « la fornication contre nature entre les personnes de même sexe. » (79 femmes ont été poursuivies sous le coup de cet article entre 1938 et 1945 au tribunal de Vienne selon les travaux de l’historien Johann Krichknopf.)"),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Annette Eick</b></p>Elle réussit à s'enfuir d’Allemagne en 1938 pour l’Angleterre. “Ce qui était dur, bien entendu, c’est que je voyais mes parents me faire signe sur la plate-forme et quand le train partit je savais que je n’allais jamais les revoir”. Le titre du documentaire fait référence à l’article du Code pénal allemand qui criminalisait l’homosexualité masculine de 1871 à 1994. L’article 129 du Code pénal autrichien de 1852 à 1971 interdisait « la fornication contre nature entre les personnes de même sexe. » (79 femmes ont été poursuivies sous le coup de cet article entre 1938 et 1945 au tribunal de Vienne selon les travaux de l’historien Johann Krichknopf.)")
	},
    {
      'q': '<H4>Rubrique: résistance</H4><H3>Rolande Trempée et Andrée Dubos-Larouquette ont contribué à libérer leur ville laquelle ?</H3>',
      'options': [
	  "Charleville Mézières",
	  "Maubeuge",
	  "Valenciennes"
      ],
      'correctIndex': 0,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Charleville Mézières</b></p>Enseignantes, elles s'engagent dans la résistance et participent activement à la libération de Charleville Mézières. Après la guerre, elles vécurent ensemble et continuèrent leurs engagements. Rolande Trempé a écrit notamment le documentaire <I>Résistantes de l’ombre à la lumière</I> réalisé par Cécile Favier."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Charleville Mézières</b></p>Enseignantes, elles s'engagent dans la résistance et participent activement à la libération de Charleville Mézières. Après la guerre, elles vécurent ensemble et continuèrent leurs engagements. Rolande Trempé a écrit notamment le documentaire <I>Résistantes de l’ombre à la lumière</I> réalisé par Cécile Favier.")
    },
	{
      'q': '<H4>Rubrique: résistance</H4><H3>Elles appelèrent les soldats allemands à la désertion en diffusant des tracts après plusieurs années de résistance sur l’île de Jersey. Qui sont-elles ?</H3>',
      'options': [
	  "Rolande Trempée et Andrée Dubos-Larouquette",
	  "Arletty et Susy Solidor",
	  "Claude Cahun et Marcel Moore"
      ],
      'correctIndex': 2,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Claude Cahun et Marcel Moore</b></p>Après plusieurs années de résistance, elles furent arrêtées et condamnées à mort par les nazis. Elles furent sauvées d’extrême justesse à la libération du territoire. Durant leur emprisonnement, elles continuèrent de résister et à appeler à la désertion les soldats allemands qui les gardaient. La santé de Claude Cahun fut très affectée par cet emprisonnement."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Claude Cahun et Marcel Moore</b></p>Après plusieurs années de résistance, elles furent arrêtées et condamnées à mort par les nazis. Elles furent sauvées d’extrême justesse à la libération du territoire. Durant leur emprisonnement, elles continuèrent de résister et à appeler à la désertion les soldats allemands qui les gardaient. La santé de Claude Cahun fut très affectée par cet emprisonnement.")
    },
	{
      'q': "<H4>Rubrique: collaboration</H4><H3>En 1942, son interprétation de <I>Lili Marleen</I> a été un tube autant pour les troupes d'occupations nazies à Paris que pour les troupes alliées ?</H3>",
      'options': [
	  "Arletty",
	  "Susy Solidor",
	  "Mistinguett"
      ],
      'correctIndex': 1,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Suzy Solidor</b></p>Elle aura chanté au début de la guerre sur le front pour les soldats français, puis dans son cabaret devant des officiers nazis et sur Radio Paris (radio de propagande durant l’occupation). En 1942, son interprétation de <I>Lili Marleen</I> devient une chanson culte tant pour les soldats allemands que pour les soldats des armées alliées."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Suzy Solidor</b></p>Elle aura chanté au début de la guerre sur le front pour les soldats français, puis dans son cabaret devant des officiers nazis et sur Radio Paris (radio de propagande durant l’occupation). En 1942, son interprétation de <I>Lili Marleen</I> devient une chanson culte tant pour les soldats allemands que pour les soldats des armées alliées.")
    },
	{
      'q': '<H4>Rubrique: résistance</H4><H3>Elisabeth Eindenbenz a reçu de nombreuses décorations et titres pour son action de résistante. Notamment celui de « juste parmi les nations » en 2002, pour quel type d’action ?</H3>',
      'options': [
	  "Aide à obtenir des faux papiers à des familles juives",
	  "Aide à faire passer des enfants juifs en Suisse",
	  "Aide apportée à des femmes, notamment juives, à mettre au monde leurs enfants"
      ],
      'correctIndex': 2,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Aide apportée à des femmes, notamment juives, à mettre au monde leurs enfants</b></p>Elisabeth Eindenbenz organisa une maternité à Elne de 1939 à 1944 dans les Pyrénées orientales avec une équipe et l’aide de Secours Suisse aux Enfants et du Croix Rouge Suisse pour venir en aide aux femmes et à leurs enfants fuyant la Guerre d’Espagne et le Franquisme. Elles sauvèrent plus de 600 enfants de 22 nationalités (dont 200 enfants juifs) et aidèrent leurs mères. Elisabeth Eindenbenz a enfreint le règlement (de l’époque) de neutralité et de non-ingérence de la Croix Rouge Suisse en secourant les femmes juives et les réfugiées politiques et pour le contourner elles falsifièrent entre autre les identités des patient.e.s."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Aide apportée à des femmes, notamment juives, à mettre au monde leurs enfants</b></p>Elisabeth Eindenbenz organisa une maternité à Elne de 1939 à 1944 dans les Pyrénées orientales avec une équipe et l’aide de Secours Suisse aux Enfants et du Croix Rouge Suisse pour venir en aide aux femmes et à leurs enfants fuyant la Guerre d’Espagne et le Franquisme. Elles sauvèrent plus de 600 enfants de 22 nationalités (dont 200 enfants juifs) et aidèrent leurs mères. Elisabeth Eindenbenz a enfreint le règlement (de l’époque) de neutralité et de non-ingérence de la Croix Rouge Suisse en secourant les femmes juives et les réfugiées politiques et pour le contourner elles falsifièrent entre autre les identités des patient.e.s.")
    },
	{
      'q': '<H4>Rubrique: livres et BD</H4><H3>Quel est le titre original du roman de l’écrivaine lesbienne britannique Sarah Waters. Ayant pour décors les bombardements subis par la population londonienne durant la Seconde Guerre Mondiale ?</H3>',
      'options': [
	  "<I>The night Watch</I>",
	  "<I>Three Guineas</I>",
	  "<I>Harry Potter</I>"
      ],
      'correctIndex': 0,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b><I>The night Watch</I> ou <I>Ronde de nuit</I> pour l’édition française</b></p>Ce roman de Sarah Waters, publié en 2006, plonge les lectrices/teurs dans un Londres de 1941, sous les bombardements allemands, et les connections entre quatre Londoniens - trois femmes et un jeune homme, leurs vies et leurs secrets."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b><I>The night Watch</I> ou <I>Ronde de nuit</I> pour l’édition française</b></p>Ce roman de Sarah Waters, publié en 2006, plonge les lectrices/teurs dans un Londres de 1941, sous les bombardements allemands, et les connections entre quatre Londoniens - trois femmes et un jeune homme, leurs vies et leurs secrets.")
    },
	{
      'q': '<H4>Rubrique: à propos</H4><H3>A quelle occasion le site de Queercode a-t-il été mis en place ?</H3>',
      'options': [
	  "Les 40 ans de Stonewall",
	  "Les 70 ans de la libération des camps de concentration",
	  "L’Europride à Marseille"
      ],
      'correctIndex': 1,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Pour les 70 ans de la libération des camps de concentration</b></p>Le site a été créé afin de relier et de rendre visibles les travaux d’activistes féministes, d’artistes, de performeuses, d’historien.ne.s, de sociologues… et pour partager une démarche collective et féministe d’écriture de notre histoire."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Pour les 70 ans de la libération des camps de concentration</b></p>Le site a été créé afin de relier et de rendre visibles les travaux d’activistes féministes, d’artistes, de performeuses, d’historien.ne.s, de sociologues… et pour partager une démarche collective et féministe d’écriture de notre histoire.")
    },
	{
      'q': '<H4>Rubrique: projets</H4><H3>Où se sont déroulées les rencontres internationales de l’ALMS (Archives, Libraries, Museums, and Special Collections ) en 2016 ? </H3>',
      'options': [
	  "Londres",
	  "Toronto",
	  "Le Vatican"
      ],
      'correctIndex': 0,
      'correctResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_correct.PNG" alt="" style="float:left;"/>' + "<p><b>Londres</b></p>En 2016, L’ALMS fêtait ses 10 ans à Londres après une 1ère édition à Minneapolis et une prochaine édition peut-être à T… mais chut rien n’est encore décidé. Cette édition intitulée « Without borders » avait pour objet d’échanger sur les enjeux des collections LGBTQ+. L’équipe de Queer code a été sélectionnée en 2016 pour y présenter un de nos outils de médiation numérique.  Et  les membres présentes ont pu à cette occasion rencontrer des archivistes et des militant.e.s passionnant.e.s et inspirant.e.s venu.e.s de très nombreux pays."),
      'incorrectResponse': ('<img src="https://raw.githubusercontent.com/QueerCode/quizcode/master/images/licorne_incorrect.PNG" alt="" style="float:left;"/>' + "<p><b>Londres</b></p>En 2016, L’ALMS fêtait ses 10 ans à Londres après une 1ère édition à Minneapolis et une prochaine édition peut-être à T… mais chut rien n’est encore décidé. Cette édition intitulée « Without borders » avait pour objet d’échanger sur les enjeux des collections LGBTQ+. L’équipe de Queer code a été sélectionnée en 2016 pour y présenter un de nos outils de médiation numérique.  Et  les membres présentes ont pu à cette occasion rencontrer des archivistes et des militant.e.s passionnant.e.s et inspirant.e.s venu.e.s de très nombreux pays.")
    }
  ]
});
