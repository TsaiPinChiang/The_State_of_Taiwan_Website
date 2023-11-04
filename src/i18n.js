import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
        tw: {
            translations: {
              HomeTitle:`台灣作為國家：虛構或現實`,
              HomeProjectDescriptionTitle:`計畫介紹`,
              HomeProjectDescriptionContent:`台灣是不是國家？台灣自何時成為一個獨立國家？又以何方式獨立？其國號為何？中華民國在台灣？中國民國台灣，抑或台灣共和國？其與1912年成立之中華民國之關係為何？又與聯合國憲章中提及之中華民國關係為何？
              台灣與中華人民共和國之關係又為何？與我國維持外交關係之國家，其承認之客體為何？
              此類諸多問題，具高度爭議性，但迄今仍懸而未決，學術界與政策圈亦未提出具有理論性一致之主張。
    
              本計畫結合國際法學者，憲法學者，政治學者，從不同學科角度，討論台灣的國際法地位，證成何以台灣為國家。
              本研究分成內部以及對外兩個面向，在內部方面，我們追溯台灣的憲法發展過程，主張台灣已經通過一系列的正式和非正式憲法變革，建立了自己的憲法體系，而非僅僅依賴於書面的中華民國憲法。
              對於台灣的國家地位以及其與中華人民共和國的關係的任何憲法論述，都必須考慮到這些憲法的轉變。
              在這一變革過程中，台灣通過台灣人民的民主決定，已經確立了固定居民、一定界限之領土、有效統治的政府，以及作為一個與中華人民共和國不同的政治實體與外界進行外交關係的能力。
              在外部方面，我們探討台灣如何通過憲法變革，在一個看似平靜但卻充滿革命性變化的過程中，宣告獨立並取得國家地位。
    
              總體而言，通過從跨學科的角度審視台灣的憲政變遷和國際地位，我們全面探索台灣在國際社會中的地位。
              除了理論貢獻外，本計畫並整理過去中華民國（台灣）加入和退出國際組織，以及與第三國建交斷交之資料庫，供各界研究參考。
              `,
              HomeResearcherTitle: `計畫主持人`,
              HomeAssistantTitle: `研究助理`,
              HomeOrderDescription: `依筆畫順序排列`,
              Home人物簡介:`人物簡介`,
              Home書籍介紹:`書籍介紹`,
              Home書籍目標成果:`本計劃的目標成果`,
              Home書籍內容:`本書將為台灣的國家地位提供一致且融貫的理論基礎，並且將按照國內外的政治環境，提出相關政策建議。這本書首先將探討台灣內部的憲法變遷，如何在中華民國憲法的框架下，重塑台灣的憲法認同。其次本書將處理聯合國大會第2758號決議關於一個中國的棘手問題。最後本書將分析一個中國的概念，如何在聯合國以及其附隨組織中，被扭曲與濫用。`,
              Home書籍圖片來源:`圖片來源：pohao liu`,
              HomeContactUs:`聯絡我們`,
              HomeContactContext:`請填入下列資訊，我們會盡快聯絡你`,
              Home傳送訊息:`傳送訊息`,
              Home首圖來源:`圖片來源：葉仰山先生拍攝`,
              HomeResearchTeam:`研究團隊`,
              Button關閉:`關閉`,
              中央研究院歐美所: `中央研究院歐美研究所`,
              使用說明: `使用說明`,
              資料庫: `State of Taiwan 資料庫`,
              國內事件: `國內事件`,
              國外事件:`國外事件`,
              開始年:`開始年`,
              結束年:`結束年`,
              關鍵字:`關鍵字`,
              標籤:`標籤`,
              年份索引:`年份`,
              計畫說明:`計畫說明`,
              "State of Taiwan 資料庫":`State of Taiwan 資料庫`,
              "搜尋事件":`搜尋事件`,
              "全部":"全部",
            }
          },
        en: {
            translations: {
                HomeTitle:`The State of Taiwan:
                Fact or Fiction`,
                HomeProjectDescriptionTitle:`Project Introduction`,
                HomeProjectDescriptionContent:`Is Taiwan a State? If so, when and how did it attain statehood? What is the significance of its name, and does that significance warrant questioning the essence of Taiwan's international standing? What is the relationship between this state and the Republic of China established in 1912, or the Republic of China as mentioned in the United Nations Charter of 1945? Furthermore, what is its relationship with the People's Republic of China? These critical questions have yet to be satisfactorily answered in the search for Taiwan's statehood. 

                Our project brings together scholars in constitutional law, international law, and political science with the aim of examining the fundamental question of Taiwan's statehood. We approach it through two critical, interrelated dimensions. Internally, we trace Taiwan's constitutional journey and investigate how the constitution of Taiwan, as opposed to the codified ROC Constitution, has emerged through a series of formal and informal constitutional changes. Any constitutional claims addressing Taiwan's statehood and its relationship with the PRC should account for this transformation, during which Taiwan—by the democratic decision of the Taiwanese people—has established a permanent population, a defined territory, a government, and the capacity to engage in foreign relations as a political entity separate from the PRC. Externally, we explore how Taiwan, through constitutional changes, declares independence and acquires statehood in a quiet yet revolutionary process.
                
                Overall, through the examination of Taiwan's constitutional changes and international standing from interdisciplinary perspectives, we seek to provide a comprehensive understanding of Taiwan's position in the global community. In addition to our theoretical contribution, we construct a dataset that traces Taiwan's accession to and withdrawal from international organizations, as well as the establishment and dissolution of its diplomatic ties with other countries.
                `,
                HomeResearcherTitle: `Principal Investigator`,
                HomeAssistantTitle: `Research Assistants`,
                HomeOrderDescription: `By Alphabetical Order`,
                Home人物簡介:`Intro`,
                Button關閉:`Close`,
                Home書籍介紹:`Book introduction`,
                Home書籍目標成果:`The goal of this project`,
                Home書籍內容:`Our book will produce a coherent and consistent theoretical foundation for Taiwan’s statehood as well as offer policy suggestions in light of the ongoing political changes, both within Taiwan and throughout the world community. It will first trace the internal constitutional reform of Taiwan and assess the current reshaping and redefinition of Taiwan’s constitutional identity under the official title of the ROC. Based on this internal analysis, our book then addresses the thorny issue of what is often referred to “one China,” embodied by the UNGA Resolution 2758. Finally, our book examines whether the contentious idea of “one China”—both in the United Nations and its affiliated organizations and in the PRC’s diplomatic relations with Taiwan and other countries — has been distorted.`,
                Home書籍圖片來源:`Source: pohao liu`,
                HomeContactUs:`Contact Us`,
                HomeContactContext:`Please fill in the information below. 
                We will reach you out as soon as possible`,
                Home傳送訊息:`Send Message`,
                Home首圖來源:`Photo by Yang-Shan Yeh`,
                HomeResearchTeam:`Research Team`,
                Button關閉:`Close`,
                中央研究院歐美所: `Institute of European and American Studies, Academia Sinica`,
                使用說明: `Instruction Manual`,
                資料庫: `State of Taiwan Dataset`,
                國內事件: `Domestic Events`,
                國外事件:`International Events`,
                開始年:`Start from`,
                結束年:`Ends at`,
                關鍵字:`Keyword`,
                標籤:`Tags`,
                年份索引:`Years`,
                計畫說明:`Project Introduction`,
                計畫說明:`Project Introduction`,
                "State of Taiwan 資料庫":`State of Taiwan Dataset`,
                "搜尋事件":`Search`,
                "全部":"All",
              }
            }

    },
    fallbackLng: "tw",
    debug: true,
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
