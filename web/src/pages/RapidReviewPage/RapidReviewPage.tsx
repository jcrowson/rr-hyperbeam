import { useEffect, useRef } from 'react'

import Hyperbeam from '@hyperbeam/web'

import { MetaTags } from '@redwoodjs/web'

const EMBED_URL =
  'https://1aa2bnwfuuv7hod22dmbiqxql.hyperbeam.com/6fJ_urs6RSOu2kt_jBJkfA?token=Weak5cmBOR7nrJDsMOcD7-tuYzoeqwmuUArkqiu9y1A'

const COMPANIES = [
  {
    domain: 'outdoor-speakers.co.uk',
  },
  {
    domain: 'catzpride.com',
  },
  {
    domain: 'dorothyperkins.com',
  },
  {
    domain: 'crimeola.com',
  },
  {
    domain: 'mynexthire.com',
  },
  {
    domain: 'spectrumhealth.org',
  },
  {
    domain: 'schuurman-schoenen.nl',
  },
  {
    domain: 'qdegrees.com',
  },
  {
    domain: 'service.gov.uk',
  },
  {
    domain: 'resumecourier.ca',
  },
  {
    domain: 'abfingredients.com',
  },
  {
    domain: 'inloox.com',
  },
  {
    domain: 'movavi.com',
  },
  {
    domain: 'bobsmithbmw.com',
  },
  {
    domain: 'zambianfootball.news',
  },
  {
    domain: 'humboldt.edu',
  },
  {
    domain: 'gameskip.com',
  },
  {
    domain: 'mathoverflow.net',
  },
  {
    domain: 'wuis.org',
  },
  {
    domain: 'topdeck.travel',
  },
  {
    domain: 'cherry.co.uk',
  },
  {
    domain: 'noctua.at',
  },
  {
    domain: 'azavea.com',
  },
  {
    domain: 'hivedigital.media',
  },
  {
    domain: 'cloud4c.com',
  },
  {
    domain: 'qurious.io',
  },
  {
    domain: 'parisultimate.com',
  },
  {
    domain: 'sanantonio-autodetailing.com',
  },
  {
    domain: 'mooresvilletribune.com',
  },
  {
    domain: 'esteri.it',
  },
  {
    domain: 'pregon.com.ar',
  },
  {
    domain: 'bigchange.com',
  },
  {
    domain: 'davidmcdavidacuraplano.com',
  },
  {
    domain: 'goethe.de',
  },
  {
    domain: 'makassarterkini.com',
  },
  {
    domain: 'scripps.com',
  },
  {
    domain: 'topangamessenger.com',
  },
  {
    domain: 'weeve.ai',
  },
  {
    domain: 'hgl.com',
  },
  {
    domain: 'sportorthourgentcare.com',
  },
  {
    domain: 'teachfromhome.google',
  },
  {
    domain: 'cc-cdq.ch',
  },
  {
    domain: 'ultimatesack.com',
  },
  {
    domain: 'agrinews.com',
  },
  {
    domain: 'kampalasun.co.ug',
  },
  {
    domain: 'listbroker.com',
  },
  {
    domain: 'sytsemafh.com',
  },
  {
    domain: 'boundless.org',
  },
  {
    domain: 'blankapparel.com',
  },
  {
    domain: 'db.com',
  },
  {
    domain: 'petrol.com',
  },
  {
    domain: 'livingrightchiropractic.com',
  },
  {
    domain: 'aesolutions.com.au',
  },
  {
    domain: 'westerndailypress.co.uk',
  },
  {
    domain: 'peninsula.org',
  },
  {
    domain: 'moodleemilie.com.br',
  },
  {
    domain: 'raptureforums.com',
  },
  {
    domain: 'freedomoffshoreadventures.com',
  },
  {
    domain: 'addintools.com',
  },
  {
    domain: 'katebilespt.com',
  },
  {
    domain: 'genoapt.com',
  },
  {
    domain: 'regionaljornal.blogspot.com.br',
  },
  {
    domain: 'konduto.com',
  },
  {
    domain: 'inmotionjax.com',
  },
  {
    domain: 'proptgroup.com',
  },
  {
    domain: 'empowertampa.com',
  },
  {
    domain: 'monitorfg.ro',
  },
  {
    domain: 'oldcarraffle.com',
  },
  {
    domain: 'diariotupa.com.br',
  },
  {
    domain: 'patriotledger.com',
  },
  {
    domain: 'mydynamicphysio.com',
  },
  {
    domain: 'github.com/fanscribed/fanscribed',
  },
  {
    domain: 'yeoldbakery.in',
  },
  {
    domain: 'saleshacker.com',
  },
  {
    domain: 'dill.de',
  },
  {
    domain: 'avoma.com',
  },
  {
    domain: 'scott-sports.com',
  },
  {
    domain: 'modelshipbuilder.com',
  },
  {
    domain: 'africametros.com',
  },
  {
    domain: 'denmanbrushus.com',
  },
  {
    domain: 'sysmaps.co.uk',
  },
  {
    domain: 'sleepeasycommunity.co.uk',
  },
  {
    domain: 'monroecourier.com',
  },
  {
    domain: 'cisfargo.com',
  },
  {
    domain: 'studential.com',
  },
  {
    domain: 'jahis.co.uk',
  },
  {
    domain: 'ww2f.com',
  },
  {
    domain: 'etq.com',
  },
  {
    domain: 'accountinghelpline.com',
  },
  {
    domain: 'a1installations.co.uk',
  },
  {
    domain: 'bluewaterorthopedics.com',
  },
  {
    domain: 'pivot-pt.com',
  },
  {
    domain: 'otc.edu',
  },
  {
    domain: 'sperofoods.co',
  },
  {
    domain: 'nita.org',
  },
  {
    domain: 'bazaarspices.com',
  },
  {
    domain: 'farolcomunitario.com.br',
  },
  {
    domain: 'verylongcompanynamewithlongdescription.com',
  },
  {
    domain: 'resumesbydesign.com',
  },
  {
    domain: 'healthplanrate.com',
  },
  {
    domain: 'liveramp.com',
  },
  {
    domain: 'encyclopediavirginia.org',
  },
  {
    domain: 'pefrontoffice.com',
  },
  {
    domain: 'vivalaad.online',
  },
  {
    domain: 'ninelife.sg',
  },
  {
    domain: 'github.com/lkquan2303/SpeechToText',
  },
  {
    domain: 'bodycotoronto.com',
  },
  {
    domain: 'goodliferehab.com',
  },
  {
    domain: 'connectornews.ca',
  },
  {
    domain: 'milanphysicaltherapy.com',
  },
  {
    domain: 'jesal.com',
  },
  {
    domain: 'helooworld.us',
  },
  {
    domain: 'quaker.co.uk',
  },
  {
    domain: 'galvezhoy.com.ar',
  },
  {
    domain: 'totalbev.com',
  },
  {
    domain: 'wvs.org.uk',
  },
  {
    domain: 'jornalagazeta-ap.com.br',
  },
  {
    domain: 'ergonized.com',
  },
  {
    domain: 'blognone.com',
  },
  {
    domain: 'promotiontherapy.net',
  },
  {
    domain: 'toptenreviews.com',
  },
  {
    domain: 'nephitimesnews.com',
  },
  {
    domain: 'inhometherapy.com',
  },
  {
    domain: 'fedex.com',
  },
  {
    domain: 'thealtruistictraveller.com',
  },
  {
    domain: 'fishingbooker.com',
  },
  {
    domain: 'alagoastempo.com.br',
  },
  {
    domain: 'rmucolonials.com',
  },
  {
    domain: 'titus2.com',
  },
  {
    domain: 'peteysplayhouse.com',
  },
  {
    domain: 'cgcosmetic.com',
  },
  {
    domain: 'octchiro.com',
  },
  {
    domain: 'wholespice.com',
  },
  {
    domain: 'debatepolitics.com',
  },
  {
    domain: 'planittesting.com',
  },
  {
    domain: 'retoucher.online',
  },
  {
    domain: 'merloactualidad.com.ar',
  },
  {
    domain: 'progressivecommercial.com',
  },
  {
    domain: 'tidningen.se',
  },
  {
    domain: 'thinkwarestore.com',
  },
  {
    domain: 'tenerifenews.com',
  },
  {
    domain: 'crunchyradish.com',
  },
  {
    domain: 'higashiaichi.co.jp',
  },
  {
    domain: 'medicinenet.com',
  },
  {
    domain: 'aviaro.com',
  },
  {
    domain: 'vcstar.com',
  },
  {
    domain: 'optimalkinetics.com',
  },
  {
    domain: 'norfolkingaround.com',
  },
  {
    domain: 'ats.edu.mx',
  },
  {
    domain: 'goargos.com',
  },
  {
    domain: 'flcc.edu',
  },
  {
    domain: 'rentcollegepads.com',
  },
  {
    domain: '9wmotel.com',
  },
  {
    domain: 'carriepagliano.com',
  },
  {
    domain: 'aceicon.com',
  },
  {
    domain: 'inspiredcamping.com',
  },
  {
    domain: 'haarlem105.nl',
  },
  {
    domain: 'gardner-webb.edu',
  },
  {
    domain: 'funke.fun',
  },
  {
    domain: 'sempacherwoche.ch',
  },
  {
    domain: 'primatv.ro',
  },
  {
    domain: 'e-ngauge.com',
  },
  {
    domain: 'tjmu.edu.cn',
  },
  {
    domain: 'alaska.edu',
  },
  {
    domain: 'televisapuebla.tv',
  },
  {
    domain: 'ohcanvas.com',
  },
  {
    domain: 'wolftherapy4kids.com',
  },
  {
    domain: 'buryfocus.co.uk',
  },
  {
    domain: 'blackbirdpizzeria.com',
  },
  {
    domain: 'mcfarlandchiropracticinfo.com',
  },
  {
    domain: 'globalz.com',
  },
  {
    domain: 'claus.com',
  },
  {
    domain: 'jmtboardrooms.co.uk',
  },
  {
    domain: 'newtoncountytimes.com',
  },
  {
    domain: 'groups.google.com',
  },
  {
    domain: 'rewe.de',
  },
  {
    domain: 'tudocelular.com',
  },
  {
    domain: 'crowleychiropractic.biz',
  },
  {
    domain: 'firdatidend.no',
  },
  {
    domain: 'mxrb.cn',
  },
  {
    domain: 'pagofruitjuice.co.uk',
  },
  {
    domain: 'thephysiotherapydoc.com',
  },
  {
    domain: 'flower-shops.co.uk',
  },
  {
    domain: 'retrorabbit.io',
  },
  {
    domain: 'ava.me',
  },
  {
    domain: 'jrpfame.com',
  },
  {
    domain: 'capco.com',
  },
  {
    domain: 'sharegate.com',
  },
  {
    domain: 'holiday-inn.co.uk',
  },
  {
    domain: 'leisureguardpetinsurance.co.uk',
  },
  {
    domain: 'clashmusic.com',
  },
  {
    domain: 'adsomenoise.com',
  },
  {
    domain: 'twinwaveswellness.com',
  },
  {
    domain: 'fish-u.ac.jp',
  },
  {
    domain: 'kmd.net',
  },
  {
    domain: 'cudo.co',
  },
  {
    domain: 'proof-reading-service.com',
  },
  {
    domain: 'humanly.io',
  },
  {
    domain: 'sb360physio.com',
  },
  {
    domain: 'exonline.com.mx',
  },
  {
    domain: 'radioworld.com',
  },
  {
    domain: 'addresstwo.com',
  },
  {
    domain: 'yesplz.coffee',
  },
  {
    domain: 'sevenoakssoundandvision.co.uk',
  },
  {
    domain: 'homerenergy.com',
  },
  {
    domain: 'raggabeancoffee.com',
  },
  {
    domain: 'perccoffee.com',
  },
  {
    domain: 'voixdelain.fr',
  },
  {
    domain: 'rogerscityrehab.com',
  },
  {
    domain: 'isleofwightguru.co.uk',
  },
  {
    domain: 'brazengamingchairs.com',
  },
  {
    domain: 'skillscout.com',
  },
  {
    domain: 'greenhatgames.com',
  },
  {
    domain: 'elnortedecastilla.es',
  },
  {
    domain: 'xxlgamer.com',
  },
  {
    domain: 'colibri.ai',
  },
  {
    domain: 'morgenbladet.no',
  },
  {
    domain: 'alaskajournal.com',
  },
  {
    domain: 'arclab.com',
  },
  {
    domain: 'advantageptrehab.com',
  },
  {
    domain: 'amscad.com',
  },
  {
    domain: 'losbanosenterprise.com',
  },
  {
    domain: 'crhealthcare.org',
  },
  {
    domain: 'allegiantfitnesssyv.com',
  },
  {
    domain: 'floorfy.com',
  },
  {
    domain: 'pappadeaux.com',
  },
  {
    domain: 'atpfortwayne.com',
  },
  {
    domain: 'tve.com.br',
  },
  {
    domain: 'visages-du-benin.com',
  },
  {
    domain: 'nfmcjax.com',
  },
  {
    domain: 'salesforceben.com',
  },
  {
    domain: 'mesacc.edu',
  },
  {
    domain: 'drbarrylkaye.com',
  },
  {
    domain: 'schmidts.com',
  },
  {
    domain: 'baneschiro.com',
  },
  {
    domain: 'unitedstatesinsurance.com',
  },
  {
    domain: 'bluecheck.me',
  },
  {
    domain: 'wwspt.com',
  },
  {
    domain: 'meticore-natural.com',
  },
  {
    domain: 'regulationtomorrow.com',
  },
  {
    domain: 'chrysaliscorporation.com',
  },
  {
    domain: 'popbuzz.com',
  },
  {
    domain: 'cirrusaircraft.com',
  },
  {
    domain: 'smithvilleherald.com',
  },
  {
    domain: 'qmul.ac.uk',
  },
  {
    domain: 'thewhatevergallery.com',
  },
  {
    domain: 'pharmaceutical-networking.com',
  },
  {
    domain: 'replacementlenses.net',
  },
  {
    domain: 'pyxi.co.uk',
  },
  {
    domain: 'cadenamaxima.com',
  },
  {
    domain: 'rockvalleypt.com',
  },
  {
    domain: 'researchgate.net',
  },
  {
    domain: 'eventbrite.co.uk',
  },
  {
    domain: 'asiapacificstar.com',
  },
  {
    domain: 'insurancehotline.com',
  },
  {
    domain: 'financialpost.com',
  },
  {
    domain: 'mochilasjansport.com',
  },
  {
    domain: 'rankduck.com',
  },
  {
    domain: 'careermc.com',
  },
  {
    domain: 'enterprise-record.com',
  },
  {
    domain: 'oscarcastrochiropractic.com',
  },
  {
    domain: 'sfist.com',
  },
  {
    domain: 'bo.de',
  },
  {
    domain: 'keystroke.ca',
  },
  {
    domain: 'diffen.com',
  },
  {
    domain: 'wearewildgoose.com',
  },
  {
    domain: 'shopbop.com',
  },
  {
    domain: 'trackershop-uk.com',
  },
  {
    domain: 'developer.mypurecloud.com',
  },
  {
    domain: 'sprtreesandlandscapes.co.uk',
  },
  {
    domain: 'saltociudad.com',
  },
  {
    domain: 'github.com/iam-mrinmoy/SpeechToText',
  },
  {
    domain: 'randipt.com',
  },
  {
    domain: 'villaselect.com',
  },
  {
    domain: 'javista.com',
  },
  {
    domain: 'tellaldi.us',
  },
  {
    domain: 'coreelementsphysicaltherapy.com',
  },
  {
    domain: 'stabilizedchiropractic.com',
  },
  {
    domain: 'mideast-times.com',
  },
  {
    domain: 'deltawaste.com',
  },
  {
    domain: 'cinesite.com',
  },
  {
    domain: 'crawfordartgallery.ie',
  },
  {
    domain: 'coreptwi.com',
  },
  {
    domain: 'eligible.com',
  },
  {
    domain: 'mercadopago.com.co',
  },
  {
    domain: 'conservativetoday.com',
  },
  {
    domain: 'housedigest.com',
  },
  {
    domain: 'broadvc.com',
  },
  {
    domain: 'ftm.nl',
  },
  {
    domain: 'worlddoctorsalliance.com',
  },
  {
    domain: 'loscerritosnews.net',
  },
  {
    domain: 'easydna.co.uk',
  },
  {
    domain: 'epamonitoring.net',
  },
  {
    domain: 'standardmeat.com',
  },
  {
    domain: 'apeironinsight.com',
  },
  {
    domain: 'lakecowichangazette.com',
  },
  {
    domain: 'bhldn.com',
  },
  {
    domain: 'shopmech.com',
  },
  {
    domain: 'bspn24.com',
  },
  {
    domain: 'orthoeast.com',
  },
  {
    domain: 'tustinchiropractor.com',
  },
  {
    domain: 'prophysicaltherapyonline.com',
  },
  {
    domain: 'thenewsprogress.com',
  },
  {
    domain: 'proacousticsusa.com',
  },
  {
    domain: 'scheidsrechters.eu',
  },
  {
    domain: 'labusinessjournal.com',
  },
  {
    domain: 'miniart-models.com',
  },
  {
    domain: 'freedesktop.org',
  },
  {
    domain: 'thesprucecrafts.com',
  },
  {
    domain: 'noblechairs.com',
  },
  {
    domain: 'civicuk.com',
  },
  {
    domain: 'savetibet.org',
  },
  {
    domain: 'nationaltrusttours.com',
  },
  {
    domain: 'botxo.ai',
  },
  {
    domain: 'rochesterlavoz.com',
  },
  {
    domain: 'home.co.uk',
  },
  {
    domain: 'optimizedwellnesscenter.com',
  },
  {
    domain: 'fluencetraining.com',
  },
  {
    domain: 'edwardbeazer.com',
  },
  {
    domain: 'ehrenbergchiropractic.com',
  },
  {
    domain: 'papersource.com',
  },
  {
    domain: 'learninga-z.com',
  },
  {
    domain: 'tilebar.com',
  },
  {
    domain: 'sapience.net',
  },
  {
    domain: 'hitra-froya.no',
  },
  {
    domain: 'akdn.org',
  },
  {
    domain: 'holidayhomerentals.uk',
  },
  {
    domain: 'wholesalecentral.com',
  },
  {
    domain: 'zimbabwesituation.com',
  },
  {
    domain: 'wavesfactory.com',
  },
  {
    domain: 'busseflowers.net',
  },
  {
    domain: 'heraldstandard.com',
  },
  {
    domain: 'pepsized.com',
  },
  {
    domain: 'openmolecules.net',
  },
  {
    domain: 'rocketeer2.com',
  },
  {
    domain: 'carexamer.com',
  },
  {
    domain: 'lankaweb.com',
  },
  {
    domain: 'kolgear.com',
  },
  {
    domain: 'yambol.org',
  },
  {
    domain: 'foley.com',
  },
  {
    domain: 'buybuybaby.com',
  },
  {
    domain: 'bihoroshinbun.com',
  },
  {
    domain: 'garrettgopt.com',
  },
  {
    domain: 'ridgeviewphysicaltherapy.com',
  },
  {
    domain: 'trufflehunter.co.uk',
  },
  {
    domain: 'process.st',
  },
  {
    domain: 'oldelpaso.co.uk',
  },
  {
    domain: 'mysouthshoreline.com',
  },
  {
    domain: 'news24.com',
  },
  {
    domain: 'fridayfeedback.com',
  },
  {
    domain: 'franciscanhealth.org',
  },
  {
    domain: 'marshallhealth.org',
  },
  {
    domain: 'romenews-tribune.com',
  },
  {
    domain: 'aketer.com',
  },
  {
    domain: 'scholarships360.org',
  },
  {
    domain: 'entrelineas.info',
  },
  {
    domain: 'eloccidente.news',
  },
  {
    domain: 'webbweekly.com',
  },
  {
    domain: 'ashland.edu',
  },
  {
    domain: 'vb-audio.com',
  },
  {
    domain: 'orlando-times.com',
  },
  {
    domain: 'vitalect.com',
  },
  {
    domain: 'elgiganten.se',
  },
  {
    domain: 'nixplay.com',
  },
  {
    domain: 'higherpraise.com',
  },
  {
    domain: 'datingscout.com',
  },
  {
    domain: 'hygromatik.com',
  },
  {
    domain: 'concordnow.com',
  },
  {
    domain: 'yogananda-srf.org',
  },
  {
    domain: 'sigmakappa.org',
  },
  {
    domain: 'lease-advice.org',
  },
  {
    domain: 'sluhn.org',
  },
  {
    domain: 'eliteptyuma.com',
  },
  {
    domain: 'home.neustar',
  },
  {
    domain: 'autodesk.co.uk',
  },
  {
    domain: 'premierecollectibles.com',
  },
  {
    domain: 'meco.com',
  },
  {
    domain: 'associatednewspapers.net',
  },
  {
    domain: 'srlsoluciones.com',
  },
  {
    domain: 'informa-tico.com',
  },
  {
    domain: 'lg.co.uk',
  },
  {
    domain: 'aust.edu',
  },
  {
    domain: '7daysinabudhabi.com',
  },
  {
    domain: 'fostercityislander.com',
  },
  {
    domain: 'karraschiropractic.com',
  },
  {
    domain: 'dsausa.org',
  },
  {
    domain: 'wild102fm.com',
  },
  {
    domain: 'cgu.ac.jp',
  },
  {
    domain: 'dataasylum.com',
  },
  {
    domain: 'foleyfish.com',
  },
  {
    domain: 'clearlyveg.org',
  },
  {
    domain: 'christmastreesdirect.co.uk',
  },
  {
    domain: 'watanserb.com',
  },
  {
    domain: 'psychedelicspotlight.com',
  },
  {
    domain: 'hstreasures.com',
  },
  {
    domain: 'intsolutionsptn.com',
  },
  {
    domain: 'uxteam.com',
  },
  {
    domain: 'evergreenenergy.co.uk',
  },
  {
    domain: 'cultivate.com',
  },
  {
    domain: 'cloudendure.com',
  },
  {
    domain: 'houseofspoils.com',
  },
  {
    domain: 'elnueve.com',
  },
  {
    domain: 'equinoxphysicaltherapy.com',
  },
  {
    domain: 'gasdetection.com',
  },
  {
    domain: 'everettindependent.com',
  },
  {
    domain: 'gamaverse.com',
  },
  {
    domain: 'economiaemercado.co.ao',
  },
  {
    domain: 'fox4beaumont.com',
  },
  {
    domain: 'iris.ci',
  },
  {
    domain: 'stv.uz',
  },
  {
    domain: 'raleighmasjid.org',
  },
  {
    domain: 'oboolo.com',
  },
  {
    domain: 'autocar.co.uk',
  },
  {
    domain: 'wombatdialer.com',
  },
  {
    domain: 'usahealthcare.net',
  },
  {
    domain: 'lotuss.com.my',
  },
  {
    domain: 'uk1.cliniko.com',
  },
  {
    domain: 'staruml.io',
  },
  {
    domain: 'recalls123.com',
  },
  {
    domain: 'swazilandnews.co.za',
  },
  {
    domain: 'dekalbphysicaltherapy.com',
  },
  {
    domain: 'georgetownphysio.com',
  },
  {
    domain: 'petsathome.com',
  },
  {
    domain: 'samjonesbbq.com',
  },
  {
    domain: 'statons.com',
  },
  {
    domain: 'impishidea.com',
  },
  {
    domain: 'tibettimes.net',
  },
  {
    domain: 'duquoin.com',
  },
  {
    domain: 'actsa.org',
  },
  {
    domain: '3ds.com',
  },
  {
    domain: 'b-fm.nl',
  },
  {
    domain: 'thepeacemealproject.org',
  },
  {
    domain: 'github.com/mozilla/speech-proxy',
  },
  {
    domain: 'jingsourcing.com',
  },
  {
    domain: 'transfermarkt.co.uk',
  },
  {
    domain: 'speedlinedrywall.co.uk',
  },
  {
    domain: 'pizzaprojekt.ca',
  },
  {
    domain: 'uft.org',
  },
  {
    domain: 'lanternandlarks.co.uk',
  },
  {
    domain: 'chocolatesdirect.co.uk',
  },
  {
    domain: 'mstc.edu',
  },
  {
    domain: 'thecatalinaislander.com',
  },
  {
    domain: 'visitorqueue.com',
  },
  {
    domain: 'banderabulletin.com',
  },
  {
    domain: 'cahabapt.com',
  },
  {
    domain: 'github.com/Aravindhan132/DialogFlow-to-iOS--',
  },
  {
    domain: 'turbo.fr',
  },
  {
    domain: 'progressnewspaper.org',
  },
  {
    domain: 'wnyc.org',
  },
  {
    domain: 'completetherapyusa.com',
  },
  {
    domain: 'nulifechiro.com',
  },
  {
    domain: 'buildingfutures.life',
  },
  {
    domain: 'natixis.com',
  },
  {
    domain: 'maxar.com',
  },
  {
    domain: 'cardhaus.com',
  },
  {
    domain: 'officerepublic.news',
  },
  {
    domain: 'morel.si',
  },
  {
    domain: 'torfx.com.au',
  },
  {
    domain: 'entitysport.com',
  },
  {
    domain: 'thewestonforum.com',
  },
  {
    domain: 'ablebits.com',
  },
  {
    domain: 'furnishare.com',
  },
  {
    domain: 'ordnet.dk',
  },
  {
    domain: 'sherpany.com',
  },
  {
    domain: 'igt.com',
  },
  {
    domain: 'prowriterz.com',
  },
  {
    domain: 'eticketing.ae',
  },
  {
    domain: 'go4worldbusiness.com',
  },
  {
    domain: 'ukinvestmentguides.com',
  },
  {
    domain: 'oceansidechurchofchrist.org',
  },
  {
    domain: 'ukfast.co.uk',
  },
  {
    domain: 'londondoctorsclinic.co.uk',
  },
  {
    domain: 'sated.com',
  },
  {
    domain: 'zivi.london',
  },
  {
    domain: 'riceexporters.co',
  },
  {
    domain: 'formarehab.com',
  },
  {
    domain: 'theolivepress.es',
  },
  {
    domain: 'csntm.org',
  },
  {
    domain: 'studydroid.com',
  },
  {
    domain: 'ebayimg.com',
  },
  {
    domain: 'crossroadspt.com',
  },
  {
    domain: 'bespokelights.co.uk',
  },
  {
    domain: 'gsmmafia.com',
  },
  {
    domain: 'vridhamma.org',
  },
  {
    domain: 'hprweb.com',
  },
  {
    domain: 'disneymovierewards.com',
  },
  {
    domain: 'bamada.net',
  },
  {
    domain: 'ncbae.edu.pk',
  },
  {
    domain: 'jminuano.com',
  },
  {
    domain: 'baptist.org.uk',
  },
  {
    domain: 'dealzblog.com',
  },
  {
    domain: 'ngssuper.com.au',
  },
  {
    domain: 'christiantimesnewspaper.com',
  },
  {
    domain: 'totalbody-pt.com',
  },
  {
    domain: 'sevenhillstechnology.com',
  },
  {
    domain: 'kis.in',
  },
  {
    domain: 'delo.kg',
  },
  {
    domain: 'wetlandsbank.com',
  },
  {
    domain: 'github.com/Amitkumar25011993/VoiceToText',
  },
  {
    domain: 'lcmchealth.org',
  },
  {
    domain: 'cj97radio.com',
  },
  {
    domain: 'optimumpps.co.uk',
  },
  {
    domain: 'mcpolymers.com',
  },
  {
    domain: 'clarkbodyworktherapies.com',
  },
  {
    domain: 'shopmyexchange.com',
  },
  {
    domain: 'foodbanksbc.com',
  },
  {
    domain: 'bahamasnews.net',
  },
  {
    domain: 'madrasati.sa',
  },
  {
    domain: 'jbhe.com',
  },
  {
    domain: 'wisdomsdoor.com',
  },
  {
    domain: 'alphachisigma.org',
  },
  {
    domain: 'homeviews.com',
  },
  {
    domain: 'coronatobros.co.uk',
  },
  {
    domain: 'g20.org',
  },
  {
    domain: 'sweethypermarket.co.za',
  },
  {
    domain: 'sway.com',
  },
  {
    domain: 'tejesta.com',
  },
  {
    domain: 'restoreamericanglory.com',
  },
  {
    domain: 'sointusenioripalvelut.fi',
  },
  {
    domain: 'charlotteoneononept.com',
  },
  {
    domain: 'frostedminiwheats.com',
  },
  {
    domain: 'radis.org',
  },
  {
    domain: 'activekidztherapy.com',
  },
  {
    domain: 'educateinspirechange.org',
  },
  {
    domain: 'dash-docs.herokuapp.com',
  },
  {
    domain: 'dohr.co.uk',
  },
  {
    domain: 'fife.ac.uk',
  },
  {
    domain: 'azure.microsoft.com',
  },
  {
    domain: 'shimmercandles.co.uk',
  },
  {
    domain: 'labovick.com',
  },
  {
    domain: 'photolemur.com',
  },
  {
    domain: 'visitmyrtlebeach.com',
  },
  {
    domain: 'healthfitinc.com',
  },
  {
    domain: 'thedogsdoodahs.com',
  },
  {
    domain: 'wagamama.com',
  },
  {
    domain: 'samefacts.com',
  },
  {
    domain: 'galvanic.com',
  },
  {
    domain: 'saveleithwalk.org',
  },
  {
    domain: 'airdrieecho.com',
  },
  {
    domain: 'activecareptinc.com',
  },
  {
    domain: 'ipostel.gob.ve',
  },
  {
    domain: 'optimalrehab.com',
  },
  {
    domain: 'hunterslodgeporlock.com',
  },
  {
    domain: 'tribunnews.com',
  },
  {
    domain: 'missionmodelsus.com',
  },
  {
    domain: 'crewhu.com',
  },
  {
    domain: 'messagemedia.co',
  },
  {
    domain: 'visiteastofengland.com',
  },
  {
    domain: 'drivetime.com',
  },
  {
    domain: 'forestchiropractic.com',
  },
  {
    domain: 'eatthismuch.com',
  },
  {
    domain: 'haymountinstitute.com',
  },
  {
    domain: 'theaccesshealthcare.com',
  },
  {
    domain: 'integrapaperless.com',
  },
  {
    domain: 'hattonescaperooms.com',
  },
  {
    domain: 'guitarworld.com',
  },
  {
    domain: 'canal6.com.hn',
  },
  {
    domain: 'orgvue.com',
  },
  {
    domain: 'desertcitieschiropractic.com',
  },
  {
    domain: 'cogitocorp.com',
  },
  {
    domain: 'mcclatchydc.com',
  },
  {
    domain: 'scr.vic.edu.au',
  },
  {
    domain: 'autodialers.info',
  },
  {
    domain: 'beijingreview.com.cn',
  },
  {
    domain: 'khealth.com',
  },
  {
    domain: 'phenompeople.com',
  },
  {
    domain: 'probonoaustralia.com.au',
  },
  {
    domain: 'mixi.jp',
  },
  {
    domain: 'peihumanesociety.com',
  },
  {
    domain: 'ahut.edu.cn',
  },
  {
    domain: 'childrensmuseums.org',
  },
  {
    domain: 'predictiveanalyticsworld.com',
  },
  {
    domain: 'capitalradiomalawi.com',
  },
  {
    domain: 'doha-news.com',
  },
  {
    domain: 'mil.be',
  },
  {
    domain: 'geekzone.co.nz',
  },
  {
    domain: 'ivanovonews.ru',
  },
  {
    domain: 'offsetters.ca',
  },
  {
    domain: 'pjstar.com',
  },
  {
    domain: 'guavahr.com',
  },
  {
    domain: 'connect.nuance.com',
  },
  {
    domain: 'nesl.edu',
  },
  {
    domain: 'poundsterlinglive.com',
  },
  {
    domain: 'papertecinc.com',
  },
  {
    domain: 'ottawakorner.com',
  },
  {
    domain: 'precursive.co.uk',
  },
  {
    domain: 'youthrights.org',
  },
  {
    domain: 'record-herald.com',
  },
  {
    domain: 'bodyfocushealth.com',
  },
  {
    domain: 'atikokanprogress.ca',
  },
  {
    domain: 'diarioarapiraca.com.br',
  },
  {
    domain: 'knews.ge',
  },
  {
    domain: 'mobile-pt.com',
  },
  {
    domain: 'allpointbulletin.com',
  },
  {
    domain: 'yourpainspecialist.com',
  },
  {
    domain: 'cimaglobal.com',
  },
  {
    domain: 'servicedogs.org',
  },
  {
    domain: 'kosmic.com.au',
  },
  {
    domain: 'tipsfound.com',
  },
  {
    domain: 'asr.uz',
  },
  {
    domain: 'tgpersonals.com',
  },
  {
    domain: 'analyticsindiamag.com',
  },
  {
    domain: 'searchencrypt.com',
  },
  {
    domain: 'mrindianapolis.com',
  },
  {
    domain: 'iplace.com.br',
  },
  {
    domain: 'premierbusinesscentres.com',
  },
  {
    domain: 'europereloaded.com',
  },
  {
    domain: 'swazitv.co.sz',
  },
  {
    domain: 'nvcf.org',
  },
  {
    domain: 'tasksboard.com',
  },
  {
    domain: 'visalaw.com',
  },
  {
    domain: 'seekoptics.com',
  },
  {
    domain: 'silvertrowel.co.uk',
  },
  {
    domain: 'telmex.com',
  },
  {
    domain: 'worksafept.com',
  },
  {
    domain: 'wpd.org',
  },
  {
    domain: 'citadelbanking.com',
  },
  {
    domain: 'backtobasicsnewport.com',
  },
  {
    domain: 'conexiom.com',
  },
  {
    domain: 'bannerpresspaper.com',
  },
  {
    domain: 'brookeviewpt.com',
  },
  {
    domain: 'intelligentdemand.com',
  },
  {
    domain: 'news-bulletin.com',
  },
  {
    domain: 'jaxptcenter.com',
  },
  {
    domain: 'china.com',
  },
  {
    domain: 'naturalgrocers.com',
  },
  {
    domain: 'yenivatan.com',
  },
  {
    domain: 'blickpunkt-godesberg.de',
  },
  {
    domain: '1sportsrx.com',
  },
  {
    domain: 'chapelscreamery.com',
  },
  {
    domain: 'libredd.it',
  },
  {
    domain: 'stratascratch.com',
  },
  {
    domain: 'noisehelp.com',
  },
  {
    domain: 'pse.org',
  },
  {
    domain: 'vallartaopina.net',
  },
  {
    domain: 'uship.com',
  },
  {
    domain: 'thru-wall.com',
  },
  {
    domain: 'wikigender.org',
  },
  {
    domain: 'translatortools.net',
  },
  {
    domain: 'oakdiocese.org',
  },
  {
    domain: 'fortworthbusiness.com',
  },
  {
    domain: 'quedigital.com.ar',
  },
  {
    domain: 'flagstone.co.uk',
  },
  {
    domain: 'ssuet.edu.pk',
  },
  {
    domain: 'a7.com.mx',
  },
  {
    domain: 'vrealities.com',
  },
  {
    domain: 'arrecifeshoy.com',
  },
  {
    domain: 'laprensasa.com',
  },
  {
    domain: 'chiropractors.healthprofs.com',
  },
  {
    domain: 'hands-onhealing.com',
  },
  {
    domain: 'google.com.bh',
  },
  {
    domain: 'deathpenalty.org',
  },
  {
    domain: 'expertvagabond.com',
  },
  {
    domain: 'donaldrussell.com',
  },
  {
    domain: 'teleniasoftware.com',
  },
  {
    domain: 'aylshamwelcomeswalkers.org.uk',
  },
  {
    domain: 'gleninnesexaminer.com.au',
  },
  {
    domain: 'paymentcloudinc.com',
  },
  {
    domain: 'toshiba.co.uk',
  },
  {
    domain: 'lner.co.uk',
  },
  {
    domain: 'icitoyen.fr',
  },
  {
    domain: 'x-itgames.co.uk',
  },
  {
    domain: 'icm.mb.ca',
  },
  {
    domain: 'jsportsrehab.com',
  },
  {
    domain: 'stollerhall.com',
  },
  {
    domain: 'edp24.co.uk',
  },
  {
    domain: 'tmtv.net',
  },
  {
    domain: 'bhba.org',
  },
  {
    domain: 'blcu.edu.cn',
  },
  {
    domain: 'cannonbeachgazette.com',
  },
  {
    domain: 'gmspt.com',
  },
  {
    domain: 'findsports.com.au',
  },
  {
    domain: 'braintreemanandvan.co.uk',
  },
  {
    domain: '4teachers.org',
  },
  {
    domain: 'plantation-pointe.net',
  },
  {
    domain: 'lebauerpt.com',
  },
  {
    domain: 'vermontbiz.com',
  },
  {
    domain: 'downtownexpress.com',
  },
  {
    domain: 'ithacajournal.com',
  },
  {
    domain: 'eaglehill.school',
  },
  {
    domain: 'wholelifetherapies.com',
  },
  {
    domain: 'global-pt.com',
  },
  {
    domain: 'lockedin-northwales.com',
  },
  {
    domain: 'zerkalomn.com',
  },
  {
    domain: 'unionfilms.org',
  },
  {
    domain: 'ktxs.com',
  },
  {
    domain: 'saubees.com',
  },
  {
    domain: 'onthemoveptandwellness.com',
  },
  {
    domain: 'evokespinalcare.com',
  },
  {
    domain: 'cmac.ws',
  },
  {
    domain: 'meridian-fit.si',
  },
  {
    domain: 'bridlingtonanimalpark.co.uk',
  },
  {
    domain: 'cypress.io',
  },
  {
    domain: 'foundationalconcepts.com',
  },
  {
    domain: 'sting.com',
  },
  {
    domain: 'raskeychiropractic.com',
  },
  {
    domain: 'proz.com',
  },
  {
    domain: 'amherst.edu',
  },
  {
    domain: 'sniffdogwalkers.com',
  },
  {
    domain: 'tamiya.it',
  },
  {
    domain: 'sacchirorpactic.com',
  },
  {
    domain: 'boatersland.com',
  },
  {
    domain: 'babsonfreep.com',
  },
  {
    domain: 'ebbot.ai',
  },
  {
    domain: 'namemc.com',
  },
  {
    domain: 'sikhzone.net',
  },
  {
    domain: 'intuit.com',
  },
  {
    domain: 'gomarketwise.com',
  },
  {
    domain: 'fmcic.ca',
  },
  {
    domain: 'therig.ca',
  },
  {
    domain: 'swautoworx.co.uk',
  },
  {
    domain: 'getapp.co.uk',
  },
  {
    domain: 'resbank.co.za',
  },
  {
    domain: 'samedaysoftware.com',
  },
  {
    domain: 'dlmu.edu.cn',
  },
  {
    domain: 'utilita.co.uk',
  },
  {
    domain: 'ega.org',
  },
  {
    domain: 'anewspost.com',
  },
  {
    domain: 'cepstral.com',
  },
  {
    domain: 'chijiang.net',
  },
  {
    domain: 'counterpsyops.com',
  },
  {
    domain: 'chestercathedral.com',
  },
  {
    domain: 'sarmientodiario.com.ar',
  },
  {
    domain: 'zzounds.com',
  },
  {
    domain: 'irizar.co.uk',
  },
  {
    domain: 'chapmanfreeborn.aero',
  },
  {
    domain: 'quinnchiropracticsantacruz.blogspot.com',
  },
  {
    domain: 'zol.ch',
  },
  {
    domain: 'it-chiba.ac.jp',
  },
  {
    domain: 'learnondemandsystems.com',
  },
  {
    domain: 'fashnerd.com',
  },
  {
    domain: 'coronadocoal.com',
  },
  {
    domain: 'diarioeco.com.mx',
  },
  {
    domain: 'michpravda.ru',
  },
  {
    domain: 'burmatoday.net',
  },
  {
    domain: 'bmrp.com',
  },
  {
    domain: 'umassathletics.com',
  },
  {
    domain: 'scottholmesmusic.com',
  },
  {
    domain: 'supplychainbeyond.com',
  },
  {
    domain: 'sohag.news',
  },
  {
    domain: 'todayinbermuda.com',
  },
  {
    domain: 'qlwb.com.cn',
  },
  {
    domain: 'aux.app',
  },
  {
    domain: 'lakelandcollege.edu',
  },
  {
    domain: 'tacobell.com',
  },
  {
    domain: 'aligned-assets.co.uk',
  },
  {
    domain: 'scheduleit.co.uk',
  },
  {
    domain: 'projeqtor.org',
  },
  {
    domain: 'quadcityptandspine.com',
  },
  {
    domain: 'fiatusaofbirmingham.com',
  },
  {
    domain: 'clockworkdoor.ie',
  },
  {
    domain: 'ray-ban.com',
  },
  {
    domain: 'langenscheidt.com',
  },
  {
    domain: 'blackwelljournaltribune.net',
  },
  {
    domain: 'github.com/Diwakar1988/ocr-tesseract',
  },
  {
    domain: 'lsnews.com.cn',
  },
  {
    domain: 'postgrid.com',
  },
  {
    domain: 'destinationlighting.com',
  },
  {
    domain: 'socialsuitehq.com',
  },
  {
    domain: 'jornadaonline.com',
  },
  {
    domain: 'neiu.edu',
  },
  {
    domain: 'eujuicers.com',
  },
  {
    domain: 'waimeaweekly.co.nz',
  },
  {
    domain: 'bisexual.org',
  },
  {
    domain: 'arkacoustics.co.in',
  },
  {
    domain: 'harmonikelley.com',
  },
  {
    domain: 'irwincntyhospital.com',
  },
  {
    domain: 'castlecreations.com',
  },
  {
    domain: 'e-monsite.com',
  },
  {
    domain: 'digicomp.ch',
  },
  {
    domain: 'kili-technology.com',
  },
  {
    domain: 'hillcrestphysio.com',
  },
  {
    domain: 'eyespy360.com',
  },
  {
    domain: 'staffordchiropractic.com',
  },
  {
    domain: 'canhr.org',
  },
  {
    domain: 'elindependientedelsur.com',
  },
  {
    domain: 'helpwise.io',
  },
  {
    domain: 'manolocosta.com',
  },
  {
    domain: 'colbyhealthandrehab.com',
  },
  {
    domain: 'brandbits.cl',
  },
  {
    domain: 'gazetademinas.com.br',
  },
  {
    domain: 'elmdata.com',
  },
  {
    domain: 'acuantcorp.com',
  },
  {
    domain: 'aphapublications.org',
  },
  {
    domain: 'pepperfry.com',
  },
  {
    domain: 'pelacase.com',
  },
  {
    domain: 'stafiz.com',
  },
  {
    domain: 'notino.co.uk',
  },
  {
    domain: 'itechtics.com',
  },
  {
    domain: 'northeastguitar.co.uk',
  },
  {
    domain: 'ewsolutions.com',
  },
  {
    domain: 'voltagrandeonline.com.br',
  },
  {
    domain: 'simonsays.hu',
  },
  {
    domain: 'tailorbrands.com',
  },
  {
    domain: 'edrawsoft.com',
  },
  {
    domain: 'kaizenpt.com',
  },
  {
    domain: 'thegioididong.com',
  },
  {
    domain: 'radioonline.fm',
  },
  {
    domain: 'iamdrjess.com',
  },
  {
    domain: 'nzkoreapost.com',
  },
  {
    domain: 'uniqlo.com',
  },
  {
    domain: 'portphillipleader.com.au',
  },
  {
    domain: 'hu.edu.jo',
  },
  {
    domain: 'tonythetiger.com',
  },
  {
    domain: 'hariankomentar.com',
  },
  {
    domain: 'koreawine.com.au',
  },
  {
    domain: 'witsenddogtraining.com',
  },
  {
    domain: 'trtworld.com',
  },
  {
    domain: 'barkerchiropractic.com',
  },
  {
    domain: 'businessoffashion.com',
  },
  {
    domain: 'hazy.com',
  },
  {
    domain: 'dealsonplugins.com',
  },
  {
    domain: 'vsp.com',
  },
  {
    domain: 'myhappyforce.com',
  },
  {
    domain: 'youdao.com',
  },
  {
    domain: 'exaptive.com',
  },
  {
    domain: 'thecartergroup.com',
  },
  {
    domain: 'hiddenreflex.com',
  },
  {
    domain: 'gazzettadelsud.it',
  },
  {
    domain: 'gocoffeego.com',
  },
  {
    domain: 'omahadailyrecord.com',
  },
  {
    domain: 'channelfutures.com',
  },
  {
    domain: 'lavozdemisiones.com',
  },
  {
    domain: 'hugedomains.com',
  },
  {
    domain: 'tildenoticias.com',
  },
  {
    domain: 'registerguard.com',
  },
  {
    domain: 'bronsonhealth.com',
  },
  {
    domain: 'asiesmargarita.com',
  },
  {
    domain: 'accusoft.com',
  },
  {
    domain: 'therahand.com',
  },
  {
    domain: 'neighbor.org',
  },
  {
    domain: 'aigaforum.com',
  },
  {
    domain: 'resultschiropracticdc.com',
  },
  {
    domain: 'lance.com.br',
  },
  {
    domain: 'womanshospital.com',
  },
  {
    domain: 'scdperformance.com.au',
  },
  {
    domain: 'abergavenny-chronicle-today.co.uk',
  },
  {
    domain: 'bose.com',
  },
  {
    domain: 'oakleys.org.uk',
  },
  {
    domain: 'bronchosports.com',
  },
  {
    domain: 'naturesaid.co.uk',
  },
  {
    domain: 'ville-erquy.com',
  },
  {
    domain: 'resonatesystems.co.uk',
  },
  {
    domain: 'walsalltraining.com',
  },
  {
    domain: 'responsiveads.com',
  },
  {
    domain: 'nortonwaybikes.com',
  },
  {
    domain: 'vinepair.com',
  },
  {
    domain: 'towergarden.com',
  },
  {
    domain: 'blackswanfoundation.ch',
  },
  {
    domain: 'noovell.com',
  },
  {
    domain: 'directrentalhouse.com',
  },
  {
    domain: 'enzacosta.com',
  },
  {
    domain: 'jujuyonlinenoticias.com.ar',
  },
  {
    domain: 'learnupon.com',
  },
  {
    domain: 'fishpond.com',
  },
  {
    domain: 'cnanews24.net',
  },
  {
    domain: 'lifeboat.com',
  },
  {
    domain: 'behindmlm.com',
  },
  {
    domain: 'open.spotify.com',
  },
  {
    domain: 'github.com/anandRockxx/speechToText',
  },
  {
    domain: 'greatdexchange.com',
  },
  {
    domain: 'technorati.com',
  },
  {
    domain: 'airslate.com',
  },
  {
    domain: 'aiu.ac.jp',
  },
  {
    domain: 'banglakagoj24.com',
  },
  {
    domain: 'valleycentral.com',
  },
  {
    domain: 'drlaurapeterson.com',
  },
  {
    domain: 'github.com/Siomt/VoiceToText',
  },
  {
    domain: 'productmint.com',
  },
  {
    domain: 'safoodbank.org',
  },
  {
    domain: 'justenergy.com',
  },
  {
    domain: 'shaffermixers.com',
  },
  {
    domain: 'sabre.co.uk',
  },
  {
    domain: 'mozillamessaging.com',
  },
  {
    domain: 'bestviewsreviews.com',
  },
  {
    domain: 'panola.edu',
  },
  {
    domain: 'yamaha-keyboard-guide.com',
  },
  {
    domain: 'greengrants.org',
  },
  {
    domain: 'greenwoodtherapy.com',
  },
  {
    domain: 'physio-academy.gr',
  },
  {
    domain: 'viaemilianet.it',
  },
  {
    domain: 'backbase.com',
  },
  {
    domain: 'thepaperweb.com',
  },
  {
    domain: 'beachsideholidaypark.co.uk',
  },
  {
    domain: 'jacksoncountydaily.com',
  },
  {
    domain: 'lifeline.org.au',
  },
  {
    domain: 'sportsandorthophysio.net',
  },
  {
    domain: 'impactomercedes.com',
  },
  {
    domain: 'wesleymission.org.au',
  },
  {
    domain: 'cocreateconsultancy.com',
  },
  {
    domain: 'topextracts.com',
  },
  {
    domain: 'mezzoguild.com',
  },
  {
    domain: 'eldiariodevictoria.com.mx',
  },
  {
    domain: 'github.com/tensor-programming/flutter_speech_to_text',
  },
  {
    domain: 'restorepg.com',
  },
  {
    domain: 'rehive.tv',
  },
  {
    domain: 'rtlnieuws.nl',
  },
  {
    domain: 'elmagallanews.cl',
  },
  {
    domain: 'mydealztime.com',
  },
  {
    domain: 'proactivesf.com',
  },
  {
    domain: 'nasua.co.uk',
  },
  {
    domain: 'summitrehabkc.com',
  },
  {
    domain: 'kktavastia.fi',
  },
  {
    domain: 'lportepilot.ca',
  },
  {
    domain: 'thelastgreatstand.com',
  },
  {
    domain: '3pthealthcare.com',
  },
  {
    domain: 'newvista.org',
  },
  {
    domain: 'exoticpets4sale.com',
  },
  {
    domain: 'myparceldelivery.com',
  },
  {
    domain: 'msofas.co.uk',
  },
  {
    domain: 'kbs.co.kr',
  },
  {
    domain: 'enlivenmvmt.com',
  },
  {
    domain: 'congannghean.vn',
  },
  {
    domain: 'theoswatch.com',
  },
  {
    domain: 'securtex.it',
  },
  {
    domain: 'selectassesstrainllc.com',
  },
  {
    domain: 'foundry4.com',
  },
  {
    domain: 'multisportdistribution.co.uk',
  },
  {
    domain: 'altaro.com',
  },
  {
    domain: 'alwatan.com',
  },
  {
    domain: 'sanews.gov.za',
  },
  {
    domain: 'joybird.com',
  },
  {
    domain: 'dioceseofjoliet.org',
  },
  {
    domain: 'gatorcases.com',
  },
  {
    domain: 'sustainableprocurementtools.scot',
  },
  {
    domain: 'ar-go.co',
  },
  {
    domain: 'designmaster.biz',
  },
  {
    domain: 'reupliquor.com',
  },
  {
    domain: 'foodhub.co.uk',
  },
  {
    domain: 'suntribunenews.com',
  },
  {
    domain: 'crushedco.com',
  },
  {
    domain: 'danvillephysicaltherapy.net',
  },
  {
    domain: 'touchpointgroup.com',
  },
  {
    domain: 'yeti.com',
  },
  {
    domain: 'qtweb.net',
  },
  {
    domain: 'richmonds.com.au',
  },
  {
    domain: 'noticiassanjose.com',
  },
  {
    domain: 'southernrehab.com',
  },
  {
    domain: 'royalchinagroup.co.uk',
  },
  {
    domain: 'erasureinfo.com',
  },
  {
    domain: 'psut.edu.jo',
  },
  {
    domain: 'last.fm',
  },
  {
    domain: 'farmersadvance.com',
  },
  {
    domain: 'enjoei.com.br',
  },
  {
    domain: 'southhillsortho.com',
  },
  {
    domain: 'formula-as.ro',
  },
  {
    domain: 'denverdogwalkers.com',
  },
  {
    domain: 'yourpurebredpuppy.com',
  },
  {
    domain: 'rcsupercross.net',
  },
  {
    domain: 'kitchenaidafrica.com',
  },
  {
    domain: 'boscovs.com',
  },
  {
    domain: 'crainsnewyork.com',
  },
  {
    domain: 'bdchiro.com',
  },
  {
    domain: 'backupworks.com',
  },
  {
    domain: 'ahfir24.com',
  },
  {
    domain: 'marleyspoon.com',
  },
  {
    domain: 'wembleymusiccentre.com',
  },
  {
    domain: 'baosoctrang.org.vn',
  },
  {
    domain: 'simba.com',
  },
  {
    domain: 'bibleworks.com',
  },
  {
    domain: 'sitebarra.com.br',
  },
  {
    domain: 'kp24.fi',
  },
  {
    domain: 'amlgs.com',
  },
  {
    domain: 'thegreenvillestandard.com',
  },
  {
    domain: 'kleisertherapy.com',
  },
  {
    domain: 'accountor.com',
  },
  {
    domain: '4ccmms.com',
  },
  {
    domain: 'oysterradio.com',
  },
  {
    domain: 'foleyhoag.com',
  },
  {
    domain: 'pelicantherapypartners.com',
  },
  {
    domain: 'wildfrontierstravel.com',
  },
  {
    domain: 'pekininsurance.com',
  },
  {
    domain: 'tipalti.com',
  },
  {
    domain: 'seattlechinesetimes.com',
  },
  {
    domain: 'suunews.com',
  },
  {
    domain: 'waukeshanow.com',
  },
  {
    domain: 'thnews.com',
  },
  {
    domain: 'tmz.com',
  },
  {
    domain: 'leisurecare.com',
  },
  {
    domain: 'drwikoff.com',
  },
  {
    domain: 'm46cloud3at.com',
  },
  {
    domain: 'ipiccy.com',
  },
  {
    domain: 'james10.com',
  },
  {
    domain: 'feelbettertherapyclinic.com',
  },
  {
    domain: 'aquatichealthandrehab.com',
  },
  {
    domain: 'finnishnews.fi',
  },
  {
    domain: 'mccc.edu',
  },
  {
    domain: 'parksidechiropracticcolumbus.com',
  },
  {
    domain: 'viikkoset.fi',
  },
  {
    domain: 'simcoereformer.ca',
  },
  {
    domain: 'celebritystores.co.uk',
  },
  {
    domain: 'thedailyreporter.com',
  },
  {
    domain: 'godswordeverychild.net',
  },
  {
    domain: 'bestdeals.today',
  },
  {
    domain: 'aperfectdayforanalysis.tumblr.com',
  },
  {
    domain: 'wallanderinstruments.com',
  },
  {
    domain: 'ebf-fbe.eu',
  },
  {
    domain: 'jany.io',
  },
  {
    domain: 'modernretail.co',
  },
  {
    domain: 'bespoketreatments.com',
  },
]

const RapidReviewPage = () => {
  const hyperbeamRef = useRef()
  const rrRef = useRef()

  useEffect(() => {
    init()
  }, [])

  async function init() {
    hyperbeamRef.current = await Hyperbeam(rrRef.current, EMBED_URL)
  }

  function changeTab(tabURL: string) {
    hyperbeamRef.current.tabs.update({ url: tabURL })
  }

  function surprise() {
    const random = COMPANIES[Math.floor(Math.random() * COMPANIES.length)]
    hyperbeamRef.current.tabs.update({ url: `https://${random.domain}` })
  }

  return (
    <>
      <MetaTags title="RapidReview" description="RapidReview page" />
      <div
        ref={rrRef}
        id="virtualComputerDiv"
        style={{ height: '720px', width: '1280px' }}
      />
      <ul style={{ height: '300px', padding: 0 }}>
        {COMPANIES.map((company) => (
          <Company
            key={company.domain}
            label={company.domain}
            onClick={changeTab}
            URL={`https://${company.domain}`}
          />
        ))}
      </ul>
    </>
  )
}

const Company = ({ onClick, label, URL }) => (
  <button onClick={() => onClick(URL)}>{label}</button>
)

export default RapidReviewPage
