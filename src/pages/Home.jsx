import React from 'react';
import Card from 'components/containers/Home/Card';

import MenuIcon from 'assets/images/icons/menu.svg';
import SocialIcon from 'assets/images/icons/social.svg';
import ArrowIcon from 'assets/images/icons/arrows.svg';
import Play from 'assets/images/icons/play.svg';
import Combined from 'assets/images/icons/Combined Shape.svg';
import MainOvalIcon from 'assets/images/icons/MOval.svg';
import OvalIcon1 from 'assets/images/icons/Oval1.svg';
import OvalIcon2 from 'assets/images/icons/Oval2.svg';
import OvalIcon3 from 'assets/images/icons/Oval3.svg';
import OvalIcon4 from 'assets/images/icons/Oval4.svg';

const Home = () => {
  return <div>
    <div className='bg-section1 h-[880px] w-full'>
      <div className='relative m-auto max-w-[1440px]'>
        <div className=' w-full px-[135px] pt-[16px] flex flex-row  justify-between'>
          <div className=' w-full flex flex-row flex-start gap-[16px]'>
            <img src={MenuIcon} />
            <span className='font-biorhyme font-bold text-[40px]'>ARCH</span>
          </div>
          <img src={SocialIcon} />
        </div>
        <img src={Combined} className="absolute ml-[1200px] mt-[550px]" />
        <img src="https://s3-alpha-sig.figma.com/img/b190/1c58/276a6ae46b6dd96e9c007b4e69d578db?Expires=1690761600&Signature=dWNyGWG~3E4mJ9uhyngX1FnRLOSatbms4cWks3vUcb-5BzZ9v-I~5CP07C3xuIxImYBtgbLMlZLOQjclWRSewAXijfxY2z1jLZQKdhpQIEgtKPS9yvHHLPWkt23Ou576cTb1A2oOFaKDzYMPNnsDKJAPArR~bixAZr5DUcYbfzbvxwFa9kqqJbvHCBfIEL8AEJy530B7j--4aZC3TwZIyl5yRCV0LkRQJAUhDu5lVvhgX0N3IX95VpLzCHo2AuTkqqcnwHeaTbaL3U6QvWr3~vtYGI2xqSMsLuZEsmHR0Aq9oO~c4SfRrvOo4Gx3IEHriMGc3TGw4KxtVNPFgtTODA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="absolute ml-[435px] mt-[42px]" />
        <span className='absolute ml-[135px] mt-[206px] font-[dmsans] font-bold text-[18px]'>Atchitect for You</span>
        <span className='absolute ml-[135px] mt-[259px] font-[biorhyme] text-[72px]'>We Develop<br />Great Designs</span>
        <img src={Play} className="absolute ml-[1150px] mt-[490px]" />
      </div>
    </div>
    <div className='bg-section2 h-[880px] w-full'>
      <div className='relative m-auto max-w-[1440px]'>
        <span className='absolute ml-[1220px] mr-[135px] mt-[74px] font-[dmsans] font-bold text-[18px]text-right'>Our Sevice</span>
        <span className='absolute ml-[806px] mt-[124px] font-[biorhyme] text-[72px] text-right'>Architectural<br />Solutions</span>
        <img src={Combined} className='absolute ml-[69px] mt-[116px]' />
        <Card className="absolute ml-[135px] mt-[160px] w-[370px] h-[500px]" image={"https://s3-alpha-sig.figma.com/img/85c5/1bee/b3c6c1c6a9e82b6dbdf967195a816df1?Expires=1690761600&Signature=LKHDqvA-rhlpFQ3965RVo~5N2~rEmH6LsVolDPMDtDVpAZRi-vnhnl4bWlksUqxczW3rYs8QaQhiI6zzgG5vmrqWMkiraKXGZXUalvnb18REmBXASckXHSzq1lQhpCgz4qUSyzxu0AmtF0D-wc9hmEGh0eWWFPaYBIPb3ZAxURP89rhDUEXajYX49QODFeNZ95XKuHePvqGQPxvRBBulDMWRxkhsdSivZHOo05fc8NGhifWzWx5YoS6BzlteFZH0dRQaOXZ6kPgLtbWyB6snBrC3XFYD3quqKzkwkdKK3q1YlEfhyZQrrbTCW458n6sdrXKfyfQIGv-ihKpUA6z6QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}>
          <div className="bg-white rounded-[20px] p-[32px] mt-[-20px]">
            <h3 className='font-bold font-[biorhyme] size-[24px] mb-[19px]'>Architectural</h3>
            <span className='font-[dmsans] size-[16px]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars.</span>
          </div>
        </Card>
        <Card className="absolute ml-[535px] mt-[280px] w-[370px] h-[500px]" image={"https://s3-alpha-sig.figma.com/img/8e94/f7bd/bbace8ee345e7c4805c2fbbcb330b39e?Expires=1690761600&Signature=GNVpt9-Cla8oz9ZTkFNKgu1s4ee6nqOYBtr8nthCkAzkaQDI79-Z20fp6RIgcraH0Auv0XaFrjLHtPEuG-oATmGXPvIeghDLFpCBROaz47fgUNgOgDXPschjezA5UR9jhFTVsuT6GS8XFXIDgT0Uq2iDTqLhkzKMrZOcvadHBTReH-gfuCBLgLTr65ETCDHxEiGFHxQFHAY70z9ZrezmlC~8RHGNDH4H0rmnDIVnkf73vjpWeqbI7BOJEmbfi2ju-BPAGbjAvmGkQ1bIHBKIPLADGypMPuoya6ah432JcCfOoBz3LuEbasXS73CnxWsa7v2q3ar~KNVCkLFZa03Bog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}>
          <div className="bg-white rounded-[20px] p-[32px] mt-[-20px]">
            <h3 className='font-bold font-[biorhyme] size-[24px] mb-[19px]'>Construction</h3>
            <span className='font-[dmsans] size-[16px]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars.</span>
          </div>
        </Card>
        <Card className="absolute ml-[935px] mt-[400px] w-[370px] h-[500px]" image={"https://s3-alpha-sig.figma.com/img/f4fb/4df9/63cdf316326ffea541b4d96233440375?Expires=1690761600&Signature=oT9wsD7g0nPB18~mn95cn0loEiQNZgVyFYqE1KH2iM23EmvA8gXgmWyJ~EFaXU11QL6dpEwXyOQHEgNyWBC93yok-P2UaZyllntlaTRreRcTlvvK3wCuUEDFmMpVBmNoMyAltpgZfQNdMmxAPZoODh3ZJbXyCSxqmO6w2mRFKrcXXppHil1G3OAjUutRkSvaHwaBgyZ08xY~7L9oh6vacnF6CTKQT0Ffwdo7xoU8wqb3SN4Ut9VGaGy9a-Gn6G0eIP6HCHT021DiEYU7UZKnqZSaokCERtyrdilbb44EQTVsrHUYJu9ofgNeU80cHehQfkEaE09VWcCn0zUzY5IziQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}>
          <div className="bg-white rounded-[20px] p-[32px] mt-[-20px]">
            <h3 className='font-bold font-[biorhyme] size-[24px] mb-[19px]'>Interior</h3>
            <span className='font-[dmsans] size-[16px]'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars.</span>
          </div>
        </Card>
        <img src={ArrowIcon} className="absolute ml-[135px] mt-[735px]" />
      </div>
    </div>
    <div className='bg-white h-[880px] w-full'>
      <div className='relative m-auto d-flex flex flex-col items-center justify-center'>
        <span className='font-[dmsans] font-bold text-[18px] text-center mt-[74px]'>Our portfolio</span>
        <span className='font-[biorhyme] text-[72px]'>Fascinating Projects</span>
        <div className='w-full flex flex-row justify-between'>
          <img src="https://s3-alpha-sig.figma.com/img/b824/afe5/00a891d6f66f3c6098d7a4e3360b3b75?Expires=1690761600&Signature=Cpi-gExGOt3x7a0oCxVNIVMrD20fe7o~3fhz6jifnpGYwHJLFxVzoHRtYl3vMfvnIkZHh4Jcz0OTAawNyT4Ta-4oOENvaDBuvxk5J~kNE~hvG0FLyJEisDpQ1Q9-OheGqsTCDsRFauufiO7lPBAEG4SVl65jieg83AU2RaHBUvWXyMqJVwtKKKcEiom9zu~x4t14wJRTYEhSo3jOIyMQyj0z2ektE7sesp~kTqi6SRRQr5RWKOHsVum2EGRFed5f4qsHqfU7OXGPW29ubHEbnLi4t10cIvtPcS0TS~NAJnm1E-Wu8fxQEKXCR-nmd2VO9b1OO9~FS6Zfz1kt~0eA3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <img src="https://s3-alpha-sig.figma.com/img/3b57/5fab/392f5ec48b1975a8b8efa501810ab2b5?Expires=1690761600&Signature=FxZXJ1FYNxgZpTguAW5JGJdEZh2tZyOtqHaOuZok-iYsdHyk64IGMMrT3HISVlly2-Yom6K4Zkl2FUms2iBEIpscEIQaJgvrzwVEdSIYZ-pWmxLhvK601m64GGRcP7ftcYO8aAYxFaTpIsyJWWU6Q6Of1XgmLfms5Cbtwp8NDfzrgQAG4nXN7hSicYkcy7LNJsY9pTgbYYRPMYWCsDV64TzKK7gg3hF8NclS9vwemhkuZYMcJH8Lry0FVw4giPqM70VEj5dZstbSuWcMWY9TP43srvga-joj~vOC0X1DDc863IJNwGCPH57xmX~2zPto-gIbXdWED5xozUPoiKcB4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          <img src="https://s3-alpha-sig.figma.com/img/d027/376e/cd9ce50eba5b9318819cb57e4032c4d6?Expires=1690761600&Signature=BjkTrYKE4fzJk-N8WBPMoPH1sugeCgU9t8giNk2~8iGwR9am~c3yK33vo6ouyisMRQaGchAGHzCe-J60dFoObsRuB5RbtX6BcIs4Bvn2X8~lWYp8--oSxCS6Lp2QPCq1cYMl7IbEymTtarkcNXkm22176pGvbBklqF-rlZzn6tc-sKdvNmPZA6IlkF2eOgBSIJ8ww3zK3M3zbaOKJmqJaVFeTDOIoGZGOiVMgklMl20-46uS8uiCP1NEtHQ1kXBwmd8j8evbUuXxSrHV1xBJbMe-53vtpSgjCQr7muObvASkIrpi2tTfZgs1SSP~KIsXKpKJLoCLtThm0L1y4IvdsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
      </div>
    </div>
    <div className='bg-section4 w-full h-[440px]'>
      <div className='relative m-auto max-width-[1440px] d-flex flex flex-row items-center justify-center w-full h-[440px] gap-[50px]'>
        <img className='w-[200px] h-[200px]' src={OvalIcon1}></img>
        <img className='w-[200px] h-[200px]' src={OvalIcon2}></img>
        <img className='w-[200px] h-[200px]' src={OvalIcon3}></img>
        <img className='w-[200px] h-[200px]' src={OvalIcon4}></img>
      </div>
    </div>
    <div className='bg-white h-[880px] w-full'>
      <div className='relative m-auto d-flex flex flex-col items-center justify-center'>
        <div className='w-full flex flex-row justify-evenly items-center  mt-[10px]'>
          <span className='font-biorhyme font-bold text-[40px]'>Meet our<br /> passionate<br /> crew</span>
          <Card className=" ml-[135px] mt-[160px] w-[370px] h-[500px]" image={"https://s3-alpha-sig.figma.com/img/b765/f7c2/af4a257afa65a521508d5c7854356327?Expires=1690761600&Signature=fFy0Agv~IY9t8cO3xRYFeMnmZcHl-Wz6TTDNgCJvmMZXNZZqzqV2UBwe5ZhQZeW-jaBFnC9LRFi695qfPImwTOrZDDletTrYDeZ6dXCNMNt5lQtvIlkbt0-7iIAo1gjIDBrGTJB1spVxKliyKCjdbiwR6P8dzePnxxF3PjvqrgxyHvIN8JYvc7V5rDuAfuXve-CC~GVvbFsRJjP8oSnkykgcOq7QRK0ROwznqej3HxraNooviXQyRIQaaQkry92vLdsP7AZhTkfGRUw7nuV6NR1xOigVcIjI1PsZJ-Z6fw2gxO0wAxnyKojjwf1bo4iNMv7niwKJ1te6TFFInWv30g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}>
            <div className="bg-white rounded-[20px] p-[32px] mt-[-20px]">
              <h3 className='font-bold font-[biorhyme] size-[24px] mb-[19px]'>Tamas Bunce</h3>
              <span className='font-[dmsans] size-[16px]'>Architect Designer</span>
            </div>
          </Card>
          <Card className=" ml-[135px] mt-[160px] w-[370px] h-[500px]" image={"https://s3-alpha-sig.figma.com/img/779d/e682/396761e28995f7e99e8b1540f96fa5dc?Expires=1690761600&Signature=obG6ziK1TK2NkFgyovoQ5jfnfI6hV4LAXer3wNti-GsGx8wmpV5THavFZKpTuCMmtwFuukW4yfzKqEd4B7FKOLSjYKYmccxCTvL3kfqH2KEaRZ3Xo1NR5NGvfiwopyquPLj9yWF9m1d7zKEMsntqGlNa7GfU46FiEvICLG3OJqZ3PZYEK30F1TdqxJ~lNmv9Zz-4LSaIMQgXCKGvSVXJEP91ei3KelYvS6CDjmVgB8bNdPaVnnRbNWByoF~LiQjc7fKGW1thxn9YlEvopocBM5Vt8NsmtP~52EW1qKdCMwYmETGEl0TJtCHXdqoJqAOVfBuLJPrHFGR1ex1G4sQy4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}>
            <div className="bg-white rounded-[20px] p-[32px] mt-[-20px]">
              <h3 className='font-bold font-[biorhyme] size-[24px] mb-[19px]'>Jafaris Long</h3>
              <span className='font-[dmsans] size-[16px]'>Architect Designer</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div className='bg-section2 h-[880px] w-full'>
      <div className='relative m-auto max-w-[1440px]'>
        <img src={Combined} className="absolute ml-[1200px] mt-[550px]" />
        <img src="https://s3-alpha-sig.figma.com/img/6612/fb21/e676bf84a6bb6d9afdf0a21e199531cf?Expires=1690761600&Signature=QsMP7Mbw58-E5d3boRWULzS-FAmULdqnsWm50JmCuaZl8RlwA~nBJdNH6hfVjEi-Zt-TzjrsGh~yzW3sH5IQ~jBfoC4pkENr2u0XHbddEPoNgEtsA5KtA8ZuJ-loP2F0kp5~AaOf5Tm~tCKEyEB1JptiENByiwrfojEcRT9lai2pwF47lTvBmzrlwetLcSQkNTqtcC5LQat28OcOQCYAocL0g3YQT09m3tMTFQwjzZcT3JWiO~8v0pXFxf4FszI8klMnC097g7n0MXpaMS9GAkhIOdZdOz4wQl9GgXX-sC82Mg6dN1tPt4jLoIZ9UTW4hpM3czoplYdZ7NkavrIscA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="absolute ml-[435px] mt-[42px]" />
        <span className='absolute ml-[1335px] mt-[206px] font-[dmsans] font-bold text-[18px]text-right'>Archievement</span>
        <span className='absolute ml-[935px] mt-[259px] font-[biorhyme] text-[48px] text-right'>Design, Followed By<br /> Form & Function</span>
      </div>
    </div>
    <div className='bg-white h-[880px] w-full'>
      <div className='relative m-auto d-flex flex flex-col items-center justify-center'>
        <span className='font-[dmsans] font-bold text-[18px] text-center mt-[74px]'>Blog</span>
        <span className='font-[biorhyme] text-[72px]'>News & Articles</span>
        <div className='w-full flex flex-row justify-evenly items-center'>
          <div className='d-flex flex flex-col justify-between rounded-[20px] bg-red w-[370px] h-[464px] p-[30px]'>
            <div className='d-flex flex flex-col'>
              <h3 className='font-bold font-[biorhyme] text-[72px] text-white'>30</h3>
              <span className='font-[dmsans] text-[16px] text-grey'>October, 2019</span>
            </div>
            <div className='d-flex flex flex-col'>
              <span className='font-[dmsans] text-[16px] text-white'>Interior</span>
              <span className=' font-[biorhyme] text-[24px] text-white'>Anyhow, and that will be a rare experience</span>
            </div>
          </div>
          <div className='d-flex flex flex-col justify-between rounded-[20px] bg-red w-[370px] h-[464px] p-[30px]'>
            <div className='d-flex flex flex-col'>
              <h3 className='font-bold font-[biorhyme] text-[72px] text-white'>30</h3>
              <span className='font-[dmsans] text-[16px] text-grey'>October, 2019</span>
            </div>
            <div className='d-flex flex flex-col'>
              <span className='font-[dmsans] text-[16px] text-white'>Interior</span>
              <span className=' font-[biorhyme] text-[24px] text-white'>Anyhow, and that will be a rare experience</span>
            </div>
          </div>
          <div className='d-flex flex flex-col justify-between rounded-[20px] bg-red w-[370px] h-[464px] p-[30px]'>
            <div className='d-flex flex flex-col'>
              <h3 className='font-bold font-[biorhyme] text-[72px] text-white'>30</h3>
              <span className='font-[dmsans] text-[16px] text-grey'>October, 2019</span>
            </div>
            <div className='d-flex flex flex-col'>
              <span className='font-[dmsans] text-[16px] text-white'>Interior</span>
              <span className=' font-[biorhyme] text-[24px] text-white'>Anyhow, and that will be a rare experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-white h-[880px] w-full'>
      <div className='relative m-auto d-flex flex flex-col items-center justify-center'>
        <div className='w-full flex flex-row justify-evenly items-center  mt-[10px]'>
          <span className='font-biorhyme font-bold text-[40px]'>What<br /> clients<br /> Say</span>
          <Card className=" ml-[135px] mt-[160px] w-[1080px] h-[600px]" direction="row" image={"https://s3-alpha-sig.figma.com/img/57a7/a9f0/17f3731bec4e4c84ab7f4045c6cdf11a?Expires=1690761600&Signature=DcLizr9qZouBuneMVu8QbstjfgfomXwXoZjAv89vdfrlnhVEfcM3Zx13nuDMiZIg2nvMf9lYKLYeEgQRyaqIQA8AFi5nT~t1ABifVaLvEbhTuSg1oKqC8zphxfOHIblKfzSt7CmMV8ctkSBuRs~AuyRrY2FSFqnHxnYj~UfL8AIAc1Il~p~v3txcqco-0WnqfS0dSKG9YgeZMEuicRj8Qhxj6aMfqg31YHGyVYzi7StFACSIgNUIMFd0Zp8QzYNmCcGfSjcbagPOTDBdChN6adoVYKw1eshVdRKCDLNxPO3IKB4jeq9OhqOGLyxlZygQch2ycIgd2qzTLGCizsoqXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}>
            <div className="bg-white rounded-[20px] p-[32px] ml-[-100px]">
              <h3 className='font-bold font-[biorhyme] size-[24px] mb-[19px]'>Tamas Bunce</h3>
              <span className='font-[dmsans] size-[16px]'>"As the minuteness of the parts formed a great hindrance to my speed, I resolved, contrary to my first intention, to make the being of a gigantic stature; that is to say, about eight feet in height, and proportionably large. After having formed this determination, and having spent some months in successfully collecting and arranging."</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div className='bg-section4 h-[880px] w-full'>
      <div className='relative m-auto d-flex flex flex-col items-center justify-center'>
        <span className='font-[dmsans] font-bold text-[18px] text-center mt-[74px] text-white'>Architect</span>
        <span className='font-[biorhyme] text-[36px] text-center text-white'>Don’t wait, get your<br/> offer right now!</span>
        <div className='w-full flex flex-row justify-between'>
        </div>
        <button className='mt-[20px] bg-primary rounded-[15px] w-[80px] h-[30px]'>
          Contact
        </button>
      </div>
    </div>
  </div>
}

export default Home;