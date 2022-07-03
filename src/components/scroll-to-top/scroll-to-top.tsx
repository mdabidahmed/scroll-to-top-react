import {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../scroll-to-top/scroll.css';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, in
        ratione sint voluptatum possimus fugit soluta nihil eum maiores iste
        aliquid. Inventore dolorum asperiores commodi esse magnam quae, fugit
        consequuntur. Veritatis corrupti quod ex recusandae optio, placeat, vero
        sed, esse aliquid totam tenetur. Molestias delectus perspiciatis
        voluptas, vel necessitatibus quia et vero nobis obcaecati, aliquam fugit
        nulla explicabo temporibus odit? Velit, nulla voluptatibus tempore nobis
        fugiat quidem quos libero exercitationem molestias voluptates doloremque
        ipsum soluta eum praesentium placeat. Illo minima atque distinctio
        veniam vel obcaecati labore, consequuntur odit accusantium totam. Minus
        sit aliquid doloremque consequuntur eveniet doloribus rerum, tenetur
        velit, pariatur voluptatibus magni maiores. Vel, possimus doloremque
        aliquam recusandae tempora, repellendus quidem consectetur rerum cum
        eaque enim fugiat laboriosam illo. Sequi dolorum error dicta saepe
        repellat commodi perferendis asperiores iure quia tenetur voluptatibus
        recusandae ducimus, natus ea ullam cumque quibusdam! Tenetur natus
        itaque nesciunt nobis officiis maiores, fugiat dolore quod. Hic odit
        dignissimos necessitatibus voluptatibus illum nulla quae itaque
        excepturi ad perferendis rem amet, voluptatum nemo. Fuga, vitae minus
        dolorem aliquam necessitatibus atque, porro doloremque fugiat incidunt
        nam, possimus dolores? Dolores debitis sunt unde error quam explicabo,
        alias, enim ea voluptates voluptatibus tempora molestias rem hic eius.
        Cumque cum reiciendis quibusdam modi iure, aspernatur neque excepturi.
        Inventore at ex magni? Architecto nam inventore distinctio nostrum
        voluptatem nisi porro vitae, eaque maiores quos delectus magni suscipit
        aut libero eius quasi a quis quisquam minus? Quas earum explicabo nemo,
        fugit ducimus deserunt. Aperiam aliquid minus deleniti illo rerum
        adipisci quasi harum repellat eveniet suscipit, tempora reiciendis
        eligendi quos optio nemo mollitia ratione quas esse sapiente? Laboriosam
        accusantium molestiae temporibus, nesciunt veniam similique. Nostrum
        repudiandae, fuga nihil eaque fugiat quo perspiciatis ullam facilis
        provident nulla consectetur rerum, consequuntur facere maiores est
        minima rem odit enim quisquam explicabo. Vel accusantium error magnam
        quisquam incidunt? Nobis, deleniti! Delectus, aut. Distinctio quod
        labore exercitationem veniam harum ullam ipsum recusandae blanditiis
        doloribus! Doloribus in vel tempore aspernatur perferendis eligendi
        molestias soluta tenetur, maxime eveniet laudantium alias repudiandae.
        Odio laborum iusto aliquam maxime, vero id in ut ad quidem eius eaque,
        rem error a! Eligendi, quidem neque iste laboriosam sequi nisi facilis
        ab, natus optio, corrupti enim quam? Cum, totam! Aliquid eum nesciunt
        placeat fuga, error quia dolorem eius dolores deserunt doloremque
        voluptas earum tempore nihil officia. Quidem animi numquam non nulla
        eaque nostrum repudiandae deserunt alias maxime. Sint in eaque
        doloremque dolorem quas porro commodi inventore cum est ex eos, aperiam
        qui odit corporis incidunt, suscipit aspernatur a ea. Labore enim
        debitis suscipit, minima quas eligendi voluptatum. Saepe provident sint
        quibusdam ad. Iusto pariatur omnis voluptatibus quia maxime ex. Quod
        quibusdam dolores maxime cupiditate obcaecati, iste impedit fugiat
        molestiae! Ipsa magni quis, aperiam cupiditate nostrum pariatur
        sapiente. Aspernatur quidem suscipit libero commodi, quisquam enim illo
        veritatis magni nobis ex eos rem qui temporibus sequi magnam? Enim,
        deleniti. Quam officia ratione dolore earum enim exercitationem eius
        corrupti quos! Vero aliquid saepe temporibus nisi adipisci sunt iusto
        laborum. Ratione fugit tempora error hic eius numquam debitis rerum
        autem reiciendis, quam obcaecati officia veniam dolorem. Saepe amet
        fugiat assumenda itaque. Nulla cum beatae asperiores facere excepturi.
        Minima exercitationem, deserunt fugiat fuga voluptatibus voluptatem,
        sunt quidem ipsam, dolorem reiciendis culpa quo facere at veniam vitae
        placeat! Numquam quaerat odit earum ad! Deserunt dicta officiis harum
        provident? Exercitationem labore natus animi quia fugit quisquam dolorem
        laudantium assumenda. Aliquid, dolore debitis ut eaque nihil optio rerum
        officiis et! Culpa doloremque consequatur nihil quas! Possimus atque,
        perspiciatis quibusdam asperiores consequuntur reprehenderit tenetur ea
        dolores! Recusandae, dolorum. Consequatur doloribus, tempore
        reprehenderit officia ut consectetur, maiores similique ducimus autem
        exercitationem provident illum maxime veniam libero rem! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dicta temporibus porro
        provident natus! Quasi unde quas ipsam soluta, molestiae voluptas
        repellendus, dolor hic ipsa, itaque placeat sapiente! At, corrupti
        nobis. Dolorum alias quas sint veniam, laboriosam nisi? Voluptates
        voluptatum voluptas nihil dolor tempora a sint, ea ipsum magni rem
        maiores corrupti voluptate explicabo omnis adipisci, reprehenderit ullam
        quas provident quos. Corporis incidunt eaque earum beatae maxime
        accusamus impedit aut nihil fugiat tempore in ex consequatur vel
        deserunt totam nisi, architecto eius dolore enim mollitia consectetur.
        Error, inventore. Dolor, perferendis corrupti! Commodi excepturi
        nesciunt molestiae praesentium. Soluta doloremque eius, mollitia velit
        ipsa nisi tempora hic beatae illo neque praesentium natus quod officia
        earum ex magnam amet molestiae! Dolorum nobis architecto iusto!
        Recusandae corrupti fugiat ullam tempora aliquam culpa repudiandae
        consectetur blanditiis autem illo, voluptates repellendus quasi
        quibusdam? Ipsa tenetur aut maiores corrupti perspiciatis! Corrupti
        magnam fuga voluptatibus aspernatur. Sunt, temporibus omnis? Vero
        architecto eum est, quam cumque dolor rerum optio! Animi suscipit nobis
        aut voluptate expedita, quidem repudiandae, aspernatur consequuntur
        atque a reprehenderit non ea porro deserunt eligendi veritatis
        perferendis dolorum? Nostrum officiis nemo cum sequi distinctio! Odit
        enim libero accusantium, beatae reiciendis mollitia inventore itaque
        fugiat consequuntur, quaerat quasi repellat ipsum corporis cum doloribus
        laborum ex voluptatem exercitationem. Unde, est. Repellat accusantium,
        sit deserunt deleniti quas possimus nobis earum officiis molestiae!
        Deleniti, quasi explicabo eaque, exercitationem perferendis sapiente,
        labore nam reiciendis nisi iste laborum ducimus recusandae culpa.
        Temporibus, quis amet! Architecto voluptates doloremque, dolore commodi
        necessitatibus, distinctio enim, incidunt amet ex eveniet ab quibusdam
        illum inventore voluptatum accusamus omnis vero! Nam consequuntur
        adipisci dolores sit quibusdam reiciendis libero. Sequi, rem. Tenetur,
        officia voluptate minima placeat assumenda adipisci quis perferendis
        corrupti aspernatur molestiae quos error rem? Omnis, totam temporibus
        accusantium veritatis alias nulla harum ipsa mollitia, quia unde
        repellendus, fugiat repellat. Nobis ullam odit possimus placeat odio
        tempore pariatur quod, illo quis, blanditiis labore velit nemo a sint
        quae, earum illum sunt quos natus nihil optio accusantium fugit. Amet,
        consequatur quae. In dolorum accusamus culpa quod fugit quo aliquid
        accusantium aut atque ullam repellendus libero ipsum veritatis itaque,
        reiciendis est inventore vel id quasi minus rem, necessitatibus facilis,
        dolor laboriosam! Unde. Mollitia quam quod aliquam possimus. Culpa at
        fugiat alias! Officia quasi placeat corrupti velit, reprehenderit dolore
        ullam nam quaerat ex adipisci doloremque suscipit, sequi assumenda rerum
        esse sed nostrum vero! Dolor perspiciatis neque nihil officia eius
        assumenda quasi hic soluta similique ex earum ducimus impedit iusto,
        unde, exercitationem, libero quo cum quam sint repudiandae illo
        molestiae quas corporis a? Eveniet. Molestias provident odio dolorem,
        corrupti ipsum accusamus laudantium quas id harum tempore velit nemo
        porro rerum, at esse eum voluptas quae ducimus aperiam pariatur
        accusantium ex nam impedit consequatur. Provident! Iste voluptas ipsam,
        tempore laboriosam delectus animi minus tempora iure praesentium ratione
        aspernatur vitae pariatur. Dolores delectus quis obcaecati, a numquam
        nihil. Vel ullam consequuntur dolor labore iusto placeat debitis! Quo
        est adipisci facere quos, tempora cum ipsam eum porro sapiente unde
        mollitia? Ea minima cum repellat quo. Voluptas reiciendis totam, animi
        odio enim cupiditate repellat assumenda quae quisquam veniam. Officiis
        blanditiis unde vero, aliquid repellendus velit rerum. Odio ullam
        expedita quasi accusamus quod iste excepturi ipsam est aut molestias
        rerum minima, nam commodi itaque laboriosam doloremque ipsa numquam
        amet! Voluptas ullam commodi in, corrupti quo autem sit voluptate
        quisquam repudiandae obcaecati alias, omnis minus similique deleniti
        illum animi odit dignissimos voluptatum. Repellat minima dicta
        assumenda, praesentium sit labore dolore. Quibusdam rerum dolore maxime
        aperiam deserunt dolor laboriosam dicta sunt accusamus ullam, nihil
        quaerat assumenda excepturi, aliquid iste repellat nisi, eum nulla
        consequatur dolores soluta ducimus facere delectus perspiciatis.
        Ratione? Laboriosam repellendus odio maxime? Molestias aspernatur
        commodi quam sed? Ipsum earum ducimus possimus nobis at accusantium et
        perferendis, aliquam, fugit nulla eum id mollitia pariatur incidunt
        eveniet veniam quaerat doloremque. Atque, accusamus ratione quam
        dignissimos ad facilis repellendus culpa quas porro quis at ducimus
        ullam obcaecati autem assumenda, tempora non debitis quos. Nesciunt
        reiciendis qui pariatur delectus veniam dicta eos! Laboriosam debitis
        omnis fugit. Dolores cupiditate aut deleniti doloremque delectus
        voluptas laboriosam corporis dolore quas quasi vitae asperiores, magni
        harum perspiciatis eius, minus aliquid quisquam illo! Dicta libero esse
        hic. Ratione animi, nisi autem consequatur libero placeat alias culpa
        atque suscipit, ad dolores officia velit rerum laborum consectetur
        provident inventore repellendus. Nisi recusandae soluta rem consectetur
        porro cupiditate illo dicta? Dolores laborum possimus id velit?
        Consequatur, doloremque provident tempore laborum esse officiis ex quo,
        eum ratione saepe eveniet perspiciatis dignissimos in cupiditate
        eligendi expedita vitae. Odio aperiam ad iure doloribus? Consectetur,
        atque. Quo eum quidem quae necessitatibus magni atque, minima velit
        aliquam ea. Animi, unde praesentium accusamus explicabo cupiditate
        perferendis doloribus, fugiat eius illum quos officiis debitis! Iusto,
        porro facilis. Molestias iste sed consequatur quis magnam, non, earum
        nam nesciunt natus doloribus nihil. Quasi, sunt harum est dignissimos,
        nihil molestias nobis, repudiandae doloribus nulla doloremque earum
        deleniti quisquam debitis eius? Obcaecati iste magnam explicabo
        voluptate tempora dolore qui officia aliquid sunt voluptas optio libero,
        officiis nostrum perspiciatis fugit accusantium, consequatur tempore
        rerum vero quasi. Necessitatibus harum eligendi voluptatibus impedit
        optio? Delectus maxime eligendi totam omnis adipisci commodi quis
        distinctio odit necessitatibus exercitationem. Error, eligendi. Fuga
        odit rerum tempore debitis, velit iste error corrupti quam, voluptatum,
        tenetur atque voluptate id cumque? Veritatis, voluptatibus unde? Soluta,
        illo eaque quod veritatis perspiciatis excepturi facere harum porro
        eligendi dicta vitae iusto, reprehenderit doloremque deserunt nobis sed
        nisi sint dolore similique. Quas, dolorum aliquam. Dignissimos? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus
        optio error reprehenderit, illum animi ea quam incidunt consequuntur ex,
        assumenda accusamus, minus tempore nesciunt pariatur laudantium. Animi,
        deleniti aliquam. Optio nulla cum modi, nihil, voluptatem molestias id
        dicta perferendis sit eaque excepturi mollitia labore, non debitis
        voluptatibus? Nostrum doloribus ipsum consequuntur a beatae repellendus
        amet veniam ullam enim non. Voluptas quis tempora eius accusamus
        obcaecati, assumenda voluptatibus est rerum saepe explicabo ipsam. Eos,
        vero? In fugiat ullam omnis placeat ipsa ea maiores voluptatem nesciunt
        quos. Deserunt magni numquam ex. Atque dolor consectetur vel aspernatur
        rerum reiciendis ea ullam, dignissimos sit repellendus inventore. Magni
        provident placeat hic vitae amet ad veritatis. Tenetur earum praesentium
        magni omnis excepturi accusamus dicta ad? Sit voluptatem possimus quae.
        Placeat libero molestias voluptate odit impedit perspiciatis ratione
        voluptatibus quaerat cupiditate quasi, accusantium dolor, nulla itaque
        dolores quidem nisi! Nihil, quis sit. Est impedit nisi vero! Ducimus,
        tempore dolor vero corrupti laborum aliquid provident omnis, earum,
        nesciunt facere qui eos maiores facilis mollitia magni. Doloribus,
        recusandae quaerat quis expedita mollitia modi sint ad distinctio
        maiores voluptatum? Porro similique beatae cum necessitatibus, eos
        laborum sed alias! Ex reprehenderit vel architecto? Voluptatem atque
        ullam, laborum accusantium maiores voluptatibus consequuntur maxime vero
        expedita corporis eum doloremque? Sit, debitis! Sed! Nostrum ea magnam
        officia quod voluptate! Deserunt corrupti culpa, nisi quia, quaerat,
        voluptates veritatis enim totam corporis saepe temporibus! Ullam qui
        nostrum rerum minima molestias corrupti ducimus earum debitis dolorum?
        Culpa possimus expedita, nihil deleniti ex laudantium quidem alias porro
        voluptatem facilis repudiandae reiciendis quae laboriosam tempora
        asperiores ad ab. Itaque iste illo, vitae officiis temporibus officia
        aut nesciunt laboriosam? Dignissimos animi libero voluptate explicabo
        consectetur iusto possimus tempora earum amet ut, tenetur, fugit
        obcaecati. Quaerat quasi corrupti id suscipit, qui rem quos et
        dignissimos. Sequi ratione tempore fugit a! Eligendi dignissimos dolor
        cum, laboriosam vel odio eius reprehenderit dolores delectus voluptates
        adipisci molestiae placeat nisi, voluptate ducimus ipsam labore error
        beatae saepe voluptatibus alias pariatur perspiciatis. Nesciunt, ipsam
        ad. Cum vero officia, necessitatibus delectus voluptatem quia id numquam
        sunt nisi modi corporis cupiditate itaque eius, quaerat tempora
        obcaecati. Recusandae, id iure! Voluptate tempore expedita, dolor dolore
        molestias eligendi neque. Nemo, cupiditate numquam earum vitae nam porro
        eum corrupti inventore suscipit quasi beatae debitis magni sapiente!
        Facere aliquid laborum aut maxime iure. Maxime iure ut quaerat harum,
        quis obcaecati quisquam. Ab tenetur consequatur temporibus libero
        expedita culpa debitis rem, vero deleniti in, perspiciatis voluptates
        laborum minus dolorum? Dolores soluta quo molestias magni ratione nihil
        repudiandae perferendis porro, sit corrupti architecto? Iure ea neque
        eius asperiores quasi quae consequuntur, aliquid, explicabo officia
        praesentium consequatur consectetur. Beatae aspernatur a ut! Officiis,
        molestias ut repudiandae vero quam praesentium eum officia non nostrum
        cumque. Dicta consectetur ut, facere sapiente voluptas officia dolore
        incidunt fuga accusamus quasi atque reprehenderit rem provident, esse
        quibusdam eveniet doloribus nisi quia blanditiis vero recusandae!
        Facilis fuga voluptatibus nam qui. Iure a quibusdam explicabo, amet sunt
        possimus quas! Vel autem assumenda, inventore aut minus vitae quod
        eveniet, corrupti quam, velit consequatur. Id ab tempora, in
        voluptatibus quia rem alias odio. Ipsa accusamus doloremque praesentium
        suscipit dolor eos aspernatur aliquid nam? Sunt, vel eveniet? Nam
        delectus repellendus sunt nihil in, commodi, doloremque eum maiores
        asperiores totam veniam, veritatis ipsam praesentium odio? Quia quis
        error eum esse accusamus nobis adipisci explicabo autem, delectus, non
        deleniti cupiditate quidem, eaque provident ipsum eos incidunt facere
        fugit reiciendis optio! Voluptate facere itaque omnis dolor doloremque.
        Ipsam praesentium consequuntur, voluptatum culpa mollitia aspernatur vel
        quidem dolorum dignissimos repudiandae, molestias a? Corporis repellat
        perspiciatis dolorum soluta! Nihil quam ipsum error id et animi quos
        perferendis repellendus eum. Aperiam natus harum ipsum consequuntur odio
        praesentium dolorem blanditiis! Laborum velit repellendus aliquid minima
        eligendi perferendis quos nobis, quo atque quis, quia ipsam nemo
        voluptate necessitatibus animi distinctio quidem pariatur! Rem hic dicta
        blanditiis cupiditate ullam officiis perferendis aliquid voluptatum
        labore modi quibusdam, quidem, odit quo culpa distinctio voluptatem
        corrupti! Modi, a totam vero excepturi accusamus mollitia commodi aut
        illum. Voluptas ullam tenetur exercitationem fugiat excepturi facilis
        fugit esse minima, officia atque, corrupti magni vitae possimus. Amet
        dignissimos ut obcaecati est aspernatur, sint illum placeat facilis
        iusto error corrupti beatae! Necessitatibus nihil omnis laborum mollitia
        aperiam, officiis minima maiores repellat! Ducimus optio doloribus fugit
        consectetur molestias itaque id rerum neque, magnam sed molestiae
        laudantium omnis, recusandae alias sequi mollitia. Doloremque? Veritatis
        id, cum ullam blanditiis nulla eos cumque voluptate. Dolor laborum
        ducimus quod perspiciatis molestiae nobis sunt saepe dolore velit, iste
        similique eum iure repellat recusandae, exercitationem atque fugiat
        minus? Debitis mollitia quasi atque nisi minima accusantium laboriosam
        ducimus quas voluptatibus fugiat possimus cupiditate perspiciatis,
        labore odit nesciunt nihil ipsam aut laborum consequuntur iste alias
        dolorum rem nam fuga. Velit! Optio placeat porro vitae quos fuga in
        facere, amet quaerat commodi quia labore provident? Aliquam debitis
        commodi aspernatur, cum sunt nobis dolor nisi fugit! Voluptatum nesciunt
        libero commodi repudiandae mollitia. Aperiam, dolore sint sunt voluptate
        facere ex at! Dignissimos consectetur error atque sequi facere harum
        ipsam libero qui quam nam. Deserunt libero quis minima hic amet quam,
        quia enim fugit? Quibusdam explicabo repellendus laudantium magnam
        quisquam error in corporis ipsa omnis itaque voluptates, quidem
        aspernatur harum cum tenetur aliquid beatae commodi voluptatum aut?
        Reiciendis fuga aspernatur nemo corrupti voluptatem doloremque. Quia
        delectus eveniet sapiente maxime! Mollitia dolorem ullam ad repellendus.
        Ut nobis ipsum iste earum sequi eum, quas error iure natus dolor
        sapiente quia provident amet reiciendis? Labore, quo molestiae? Esse
        delectus dolore assumenda voluptas quia velit repellat. Quasi,
        consequatur tempore ipsum ipsam expedita impedit sapiente eum quod, nam
        optio velit tenetur! Neque atque magnam itaque ducimus sapiente
        perspiciatis provident. Maiores, atque! Repellendus placeat alias harum
        quibusdam veniam sequi architecto maxime, beatae commodi, doloribus
        libero impedit odit asperiores accusamus, sed voluptates consectetur
        aspernatur! Ducimus facilis dicta sed. Doloremque, voluptate architecto.
        Sunt dolor minima corrupti neque assumenda ipsam debitis sit
        necessitatibus, suscipit officiis ipsa obcaecati alias provident harum
        eius tenetur officia, numquam iure vitae. Non possimus nemo temporibus
        modi velit unde. Repudiandae, sequi eveniet! Molestiae ullam officiis
        voluptatem molestias inventore nulla, tenetur reiciendis ex natus itaque
        et beatae rerum iusto tempora harum quo accusantium error asperiores
        dolores! Cum recusandae suscipit nulla. Veniam mollitia perferendis
        recusandae enim voluptatum iste vitae corporis doloremque, ex suscipit!
        Eum consequuntur, dolores vero ipsum dolore tempora architecto,
        necessitatibus voluptatem doloremque eveniet accusamus dicta vel labore
        distinctio quas. Provident reiciendis explicabo ducimus asperiores rerum
        voluptas necessitatibus saepe repellendus accusamus est temporibus
        perspiciatis possimus qui repudiandae porro, aspernatur voluptatum eum
        neque nisi. Qui, quibusdam ipsum. Modi nostrum eius odio? Dolore
        exercitationem a minima, optio quo eum quos molestias? Eveniet ipsa
        laborum vero officia, ut nisi maxime esse assumenda repellendus rem
        ipsam ducimus eligendi tenetur perferendis placeat cum laboriosam
        doloremque. Dolorum quaerat tenetur, quae cumque harum aliquid
        distinctio dolorem impedit maxime necessitatibus, deleniti aperiam
        deserunt! Labore odit optio aspernatur quibusdam unde? Labore, fuga!
        Expedita commodi totam adipisci non ut quis? Adipisci error assumenda
        eum optio molestias accusamus porro architecto, quam sint repudiandae
        autem rem nihil. Sequi, vitae voluptatibus natus facilis nihil iste
        veritatis aspernatur amet, nobis molestias minima ex reiciendis! Veniam
        optio quidem autem mollitia debitis explicabo quo ipsum provident,
        cupiditate praesentium eius, odit in corporis iure omnis commodi. Eos,
        provident delectus! Enim ab quasi debitis quibusdam vero eum error?
        Fugiat iste explicabo, quaerat fugit eius est modi adipisci ex
        doloremque voluptatum nemo! Nemo, beatae expedita sequi officiis porro,
        ullam ipsum corporis provident, quos nostrum aliquid error tempore amet
        rem. Ipsum recusandae voluptatum et, saepe totam enim illum dicta
        consequuntur, nostrum mollitia maiores. Perferendis ex molestias
        voluptatem minima, quisquam qui quam exercitationem laborum maiores
        commodi possimus quibusdam soluta expedita iure! Rerum similique
        delectus esse non ducimus fugiat cum, ipsa ab porro eos placeat,
        blanditiis neque cumque dicta inventore dolore dolorum ad! Mollitia
        temporibus nostrum obcaecati aliquid, earum ducimus soluta id? Inventore
        dolorum debitis aperiam, perferendis distinctio dolores vitae dolore
        voluptatibus qui ipsam. Voluptas, fugiat maxime optio magni quos eaque
        laboriosam ratione voluptate soluta qui. Dolores nisi cum repellendus
        expedita fugit! Voluptate eaque mollitia iure neque delectus, velit
        dolorum esse quia amet nobis nihil, vitae quidem modi consequuntur
        impedit recusandae. Quisquam dolor, itaque iusto delectus dignissimos
        magni. Optio fuga laborum omnis. Quo esse facere magni placeat obcaecati
        ex nostrum quia ratione ipsam nulla illo, repudiandae quibusdam quae
        aperiam id soluta odit saepe! Provident quo officiis veritatis corrupti
        nemo eius assumenda at? Tenetur optio, repellat aperiam sed ducimus
        adipisci deleniti ut natus unde dicta mollitia aut accusantium nemo
        similique. Minima minus repellendus, natus, perferendis quam
        voluptatibus sunt suscipit ab doloribus beatae recusandae! Possimus sint
        saepe quisquam eveniet repellendus facere reprehenderit cum atque
        libero, hic illo excepturi adipisci odit magni tempora deleniti id,
        recusandae sequi debitis vel asperiores aliquid. Aliquam repudiandae
        nisi odit? Placeat, magnam assumenda. Fugit optio neque accusamus quo
        iste a deleniti consectetur ea, exercitationem, facilis earum quod saepe
        perferendis quis. Ducimus libero accusantium in fuga. Accusantium
        expedita reiciendis ad illum. Consequuntur, vitae iusto? Nemo reiciendis
        mollitia rem reprehenderit architecto rerum tenetur, adipisci doloribus,
        earum debitis quae voluptatem, cum quam corporis cupiditate. Aut,
        inventore sit. Aut rem asperiores iste recusandae consectetur. Quos
        rerum blanditiis placeat facilis? Odio voluptatem eligendi ab et quaerat
        voluptatum esse modi eaque voluptates? Porro dicta asperiores iure amet
        autem cupiditate, eum molestiae sed quibusdam veritatis iste corporis!
        Nostrum molestiae, itaque praesentium cumque nobis recusandae officia
        unde quas id ratione amet in harum dolore pariatur vel sequi odio nemo
        repellendus quibusdam distinctio. Cupiditate inventore velit sint alias
        obcaecati! Quas porro libero rem esse quos ullam sit modi rerum
        praesentium enim adipisci accusantium, sunt obcaecati distinctio, quasi
        exercitationem ratione consectetur? Officia ipsa accusantium ipsum.
        Repellat eveniet quam rem iure. Quae quo dolorum aperiam, dolorem
        repellat error beatae eos veniam aut, vero corporis. Aspernatur,
        corporis! Inventore, officia dignissimos labore enim libero accusantium
        laboriosam culpa laudantium ullam iusto necessitatibus repellendus sit.
        Ab eaque nihil, cumque animi iure porro accusamus quam laboriosam
        repellendus dolorem cupiditate? Culpa, natus autem! Fuga sint architecto
        ducimus dolore, quam labore vero, ea, autem nisi beatae quibusdam ut.
        Fugit necessitatibus recusandae aspernatur aliquid sapiente, quod culpa
        facilis molestias quasi cupiditate consequatur! Porro voluptatum impedit
        quisquam ducimus assumenda ratione commodi veritatis, ex qui minus
        quibusdam. Itaque vero et veritatis! Quidem consectetur ex magni
        expedita in voluptate sint. Amet illo maiores, velit adipisci facilis
        libero repudiandae, nobis assumenda laudantium inventore animi, quasi
        optio. Fuga illo tempore asperiores. Quaerat, provident eveniet. Placeat
        quisquam doloribus ratione, illum voluptates non exercitationem beatae
        in repudiandae laudantium itaque, amet accusantium sit, repellat
        inventore enim quod numquam sint culpa. Eius nam, praesentium tempora
        cupiditate neque vitae. Perspiciatis, error dolores. Molestiae odio iste
        vel repellendus voluptatibus. At ullam rem saepe dolores eligendi
        assumenda quibusdam eaque iusto! Beatae minima adipisci harum at
        quibusdam, impedit fuga consectetur enim asperiores? Obcaecati eos
        dignissimos molestiae et magni dolorem vero commodi quod! Modi obcaecati
        autem ipsa, totam itaque magni suscipit quae dolore! Ex voluptatum hic
        incidunt? Saepe sapiente eaque neque blanditiis nam. Sequi est
        distinctio nobis autem dolores dolore, quisquam, deleniti consectetur
        aspernatur, quidem dolorum explicabo reprehenderit minus magnam modi
        laborum necessitatibus nostrum placeat esse eos iure doloribus unde odit
        amet! Accusantium! Ipsum eos fugit iusto nam non eligendi neque officia
        explicabo cupiditate ex. Illum aperiam, accusantium voluptas quo debitis
        dolores assumenda similique qui. Ducimus tenetur iste itaque ullam, ea
        sed magni. Illo minus labore repellendus. Vero, laborum consequatur,
        modi repudiandae aspernatur dolor voluptatibus, incidunt amet enim
        facilis quae ipsa quas. Expedita iste sapiente quidem magni doloribus
        repellat assumenda quos architecto beatae. Aut modi magnam corporis,
        quasi, consequuntur omnis nostrum ut dicta facilis, eaque accusantium
        aliquam quo? Cumque eius adipisci, velit iure ratione cupiditate,? Modi
        facilis maxime recusandae culpa quos et. Dignissimos culpa ullam sequi
        assumenda quasi accusantium nobis corporis aperiam eos? Doloremque,
        accusantium beatae. Voluptas, modi? Temporibus earum veniam dolores quis
        quas dolorum omnis assumenda cum, laudantium ea! Impedit libero possimus
        architecto aut distinctio consequuntur omnis accusamus recusandae ut,
        soluta voluptatum accusantium, quae facere iusto? Obcaecati. Quasi, est
        natus, porro assumenda velit similique tempora fuga eaque minus mollitia
        accusamus sit! Repellendus commodi accusamus quas enim eveniet
        doloremque assumenda reprehenderit, fuga odit illo. Dolores esse odio
        eos. Ipsam possimus quis exercitationem! Reprehenderit illum assumenda
        odit et soluta in molestiae ab namora? Ipsa voluptatibus, natus ea fugit
        numquam minus aspernatur ut quos corrupti amet aliquid animi mollitia
        adipisci obcaecati, voluptate aperiam libero impedit nulla eius iusto
        neque magnam? Cupiditate? Nobis magni cum modi id exercitationem
        providentm quisquam inventore facilis fugit quod at possimus fugiat
        atque vel cupiditate magni explicabo odit voluptate nobis quaerat, porro
        ipsum.
      </p>

      <FaArrowCircleUp
        className='scrollTop'
        onClick={scrollTop}
        style={{height: 30, display: showScroll ? 'flex' : 'none'}}
      />
    </>
  );
};

export default ScrollToTop;
