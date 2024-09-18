import { NavbarProducts } from "../components/Navbar-Products/NavbarProducts";
import Footer from "../components/Footer/Footer";
import "./datenschutz.css";

export const Datenschutz = () => {
  return (
    <div>
      <NavbarProducts />
      <div className="container privacy-policy">
        <div className="privacy-content">
          <h3>Datenschutzerklärung</h3>
          <ul className="privacy-list">
            <li className="privacy-section">
              <h4>Verantwortlicher</h4>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung,
                sonstiger in den Mitgliedstaaten der Europäischen Union
                geltenden Datenschutzgesetze und anderer Bestimmungen mit
                datenschutzrechtlichem Charakter ist die alkaya-One,
                Saime-Genc-Ring 28, 53121 Bonn, vertreten durch die
                Kaufmännische Leitung Frank Stellbogen (nachfolgend
                „Verantwortlicher“ bzw. „wir“ oder „uns“).
              </p>
            </li>

            <li className="privacy-section">
              <h4>A. Allgemeines zur Datenverarbeitung</h4>
              <ol className="privacy-sublist">
                <li className="privacy-item">
                  <strong> Personenbezogene Daten</strong>
                  <p>
                    Personenbezogene Daten sind Einzelangaben über persönliche
                    oder sachliche Verhältnisse einer bestimmten oder
                    bestimmbaren natürlichen Person. Darunter fallen
                    Informationen wie zum Beispiel Name, Anschrift,
                    Telefonnummer und E-Mail Adresse, aber auch die IP-Adresse,
                    die einem Anschluss zuzuordnen ist. Informationen, die nicht
                    direkt mit der Identität einer Person in Verbindung gebracht
                    werden - wie zum Beispiel favorisierte Internetpräsenzen
                    oder Anzahl der Nutzer einer Seite - sind keine
                    personenbezogenen Daten.
                  </p>
                </li>
                <li className="privacy-item">
                  <strong>
                    Umfang der Verarbeitung personenbezogener Daten
                  </strong>
                  <p>
                    Wir erheben und verwenden personenbezogene Daten unserer
                    Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                    einer funktionsfähigen Website sowie unserer Inhalte und
                    Leistungen erforderlich ist. Die Erhebung und Verwendung
                    personenbezogener Daten unserer Nutzer erfolgt regelmäßig
                    nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in
                    solchen Fällen, in denen eine vorherige Einholung einer
                    Einwilligung aus tatsächlichen Gründen nicht möglich ist und
                    die Verarbeitung der Daten durch gesetzliche Vorschriften
                    gestattet ist.
                  </p>
                </li>
                <li className="privacy-item">
                  <strong>
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                  </strong>
                  <p>
                    Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
                    eine Einwilligung der betroffenen Person einholen, dient
                    Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO)
                    als Rechtsgrundlage für die Verarbeitung personenbezogener
                    Daten.{" "}
                  </p>
                  <p>
                    Bei der Verarbeitung von personenbezogenen Daten, die zur
                    Erfüllung eines Vertrages, dessen Vertragspartei die
                    betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1
                    lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für
                    Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher
                    Maßnahmen erforderlich sind.
                  </p>
                  <p>
                    Ist die Verarbeitung zur Wahrung eines berechtigten
                    Interesses unseres Unternehmens oder eines Dritten
                    erforderlich und überwiegen die Interessen, Grundrechte und
                    Grundfreiheiten des Betroffenen das erstgenannte Interesse
                    nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als
                    Rechtsgrundlage für die Verarbeitung.
                  </p>
                </li>
                <li className="privacy-item">
                  <strong> Datenlöschung und Speicherdauer</strong>
                  <p>
                    Die personenbezogenen Daten der betroffenen Person werden
                    gelöscht oder gesperrt, sobald der Zweck der Speicherung
                    entfällt. Eine Speicherung kann darüber hinaus dann
                    erfolgen, wenn dies durch den europäischen oder nationalen
                    Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder
                    sonstigen Vorschriften, denen wir unterliegen, vorgesehen
                    wurde. Eine Sperrung oder Löschung der Daten erfolgt auch
                    dann, wenn eine durch die genannten Normen vorgeschriebene
                    Speicherfrist abläuft, es sei denn, dass eine
                    Erforderlichkeit zur weiteren Speicherung der Daten für
                    einen Vertragsabschluss oder eine Vertragserfüllung besteht.
                  </p>
                </li>
              </ol>
            </li>

            <li className="privacy-section">
              <h4>B. Bereitstellung der Website und Erstellung von Logfiles</h4>
              <p>
                Bei jedem Aufruf unserer Internetseite werden durch ein
                automatisiertes System Daten und Informationen erfasst.
              </p>
              <p>
                <strong>Folgende Daten werden hierbei erhoben:</strong>
              </p>
              <ul className="privacy-sublist">
                <li>
                  Informationen über den Browsertyp und die verwendete Version
                </li>
                <li> Das Betriebssystem des Nutzers</li>
                <li> Den Internet-Service-Provider des Nutzers</li>
                <li>Die IP-Adresse des Nutzers</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>
                  Webseiten, von denen das System des Nutzers auf unsere
                  Internetseite gelangt (Referrer)
                </li>
                <li>
                  Webseiten, die vom System des Nutzers über unsere Webseite
                  aufgerufen werden
                </li>
              </ul>
              <p>
                Diese Daten werden in den Logfiles unseres Systems gespeichert.
                Eine Speicherung dieser Daten zusammen mit anderen
                personenbezogenen Daten des Nutzers findet nicht statt.
              </p>
              <p>
                <strong>Rechtsgrundlage für die Datenverarbeitung</strong>
                <br />
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und
                der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO
              </p>
              <p>
                <strong>Zweck der Datenverarbeitung</strong>
                <br />
                Die vorübergehende Speicherung der IP-Adresse durch das System
                ist notwendig, um eine Auslieferung der Website an den Rechner
                des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des
                Nutzers für die Dauer der Sitzung gespeichert bleiben.
              </p>
              <p>
                Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit
                der Website sicherzustellen. Zudem dienen uns die Daten zur
                Optimierung der Website und zur Sicherstellung bzw. zur
                Sicherheit unserer informationstechnischen Systeme.{" "}
              </p>
              <p>
                In diesen Zwecken liegt auch unser berechtigtes Interesse an der
                Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                <strong>Dauer der Speicherung</strong> <br />
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle
                der Erfassung der Daten zur Bereitstellung der Website ist dies
                der Fall, wenn die jeweilige Sitzung beendet ist.
              </p>
              <p>
                Im Falle der Speicherung der Daten in Logfiles ist dies nach
                spätestens sechs Wochen der Fall. Eine darüber hinausgehende
                Speicherung ist möglich. In diesem Fall werden die IP-Adressen
                der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des
                aufrufenden Clients nicht mehr möglich ist.
              </p>
              <p>
                <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
                <br />
                Die Erfassung der Daten zur Bereitstellung der Website und die
                Speicherung der Daten in Logfiles ist für den Betrieb der
                Internetseite zwingend erforderlich. Es besteht folglich seitens
                des Nutzers keine Widerspruchsmöglichkeit.
              </p>
            </li>

            <li className="privacy-section">
              <h4>C. Verwendung von Cookies</h4>
              <p>
                Unsere Internetseiten verwenden an mehreren Stellen “Cookies“.
                Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt
                werden und die Ihr Browser speichert. Dadurch wird es
                ermöglicht, auf Ihrem PC spezifische, auf Sie, den Nutzer,
                bezogene Informationen zu speichern, während Sie unsere Web-Site
                besuchen. Cookies helfen dabei, die Nutzungshäufigkeit und die
                Anzahl der Nutzer einer Internetseite zu ermitteln, sowie das
                Internetangebot für Sie möglichst komfortabel und effizient zu
                gestalten.
              </p>
              <p>
                Wir verwenden einerseits "Session-Cookies", die ausschließlich
                für die Dauer Ihrer Nutzung einer unserer Internetseiten
                zwischengespeichert werden. "Session-Cookies" werden nach Ende
                Ihres Besuchs automatisch gelöscht.{" "}
              </p>
              <p>
                <strong>
                  In den „Session-Cookies“ werden dabei folgende Daten
                  gespeichert und übermittelt:
                </strong>
              </p>
              <ul>
                <li>Artikel in einem Warenkorb</li>
                <li>Log-In-Informationen</li>
              </ul>
              <p>
                Zum anderen nutzen wir "permanente Cookies", um Informationen
                über Besucher festzuhalten, die wiederholt auf eine unserer
                Internetseiten zugreifen. Der Zweck des Einsatzes dieser Cookies
                besteht darin, Ihnen eine optimale Benutzerführung anbieten zu
                können sowie Sie wieder zu erkennen und Ihnen bei wiederholter
                Nutzung eine erneute Anmeldung zu ersparen. Der Inhalt eines
                permanenten Cookies beschränkt sich auf eine
                Identifikationsnummer. Name, IP-Adresse etc. werden nicht
                gespeichert. Eine Einzelprofilbildung über Ihr Nutzungsverhalten
                findet nicht statt.
              </p>
              <p>
                Beim Aufruf unserer Website wird der Nutzer über die Verwendung
                von Cookies zu Analysezwecken informiert und seine Einwilligung
                zur Verarbeitung der in diesem Zusammenhang verwendeten
                personenbezogenen Daten eingeholt. Hierbei erfolgt auch ein
                Hinweis auf diese Datenschutzerklärung.
              </p>
              <p>
                <strong>Rechtsgrundlage für die Datenverarbeitung</strong>
                <br />
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter Verwendung technisch notweniger Cookies ist Art. 6 Abs. 1
                lit. f DSGVO.
              </p>
              <p>
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter Verwendung von Cookies zu Analysezwecken ist bei Vorliegen
                einer diesbezüglichen Einwilligung des Nutzers Art. 6 Abs. 1
                lit. a DSGVO.
              </p>
              <p>
                <strong>Zweck der Datenverarbeitung</strong>
                <br />
                Der Zweck der Verwendung technisch notwendiger Cookies ist, die
                Nutzung von Websites für die Nutzer zu vereinfachen. Einige
                Funktionen unserer Internetseite können ohne den Einsatz von
                Cookies nicht angeboten werden. Für diese ist es erforderlich,
                dass der Browser auch nach einem Seitenwechsel wiedererkannt
                wird.
              </p>
              <p>
                <strong>Für folgende Anwendungen benötigen wir Cookies:</strong>
              </p>
              <ul>
                <li>für den Warenkorb</li>
                <li>für das Analysetool Google Analytics</li>
              </ul>
              <p>
                Die durch technisch notwendige Cookies erhobenen Nutzerdaten
                werden nicht zur Erstellung von Nutzerprofilen verwendet.
              </p>
              <p>
                Die Verwendung der Analyse-Cookies erfolgt zu dem Zweck, die
                Qualität unserer Website und ihre Inhalte zu verbessern. Durch
                die Analyse-Cookies erfahren wir, wie die Website genutzt wird
                und können so unser Angebot stetig optimieren.
              </p>
              <p>
                In diesen Zwecken liegt auch unser berechtigtes Interesse in der
                Verarbeitung der personenbezogenen Daten nach Art. 6 Abs. 1 lit.
                f DSGVO.{" "}
              </p>
              <p>
                <strong>Dauer der Speicherung</strong>
                <br />
                Cookies werden auf dem Rechner des Nutzers gespeichert und von
                diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer
                auch die volle Kontrolle über die Verwendung von Cookies. Durch
                eine Änderung der Einstellungen in Ihrem Internetbrowser können
                Sie die Übertragung von Cookies deaktivieren oder einschränken.
                Bereits gespeicherte Cookies können jederzeit gelöscht werden.
                Dies kann auch automatisiert erfolgen. Werden Cookies für unsere
                Website deaktiviert, können möglicherweise nicht mehr alle
                Funktionen der Website vollumfänglich genutzt werden.
              </p>
              <p>
                <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
                <br />
                Eine Nutzung unserer Webseite ist auch ohne Cookies möglich. Sie
                können in Ihrem Browser das Speichern von Cookies deaktivieren,
                auf bestimmte Websites beschränken oder Ihren Browser so
                einstellen, dass er sie benachrichtigt, sobald ein Cookie
                gesendet wird. Bitte beachten Sie aber, dass Sie in diesem Fall
                mit einer eingeschränkten Darstellung der Seite und mit einer
                eingeschränkten Benutzerführung rechnen müssen.
              </p>
            </li>
            <li className="privacy-section">
              <h4>D. Anmeldung zum Newsletter</h4>
              <p>
                Abonniert ein Nutzer den von uns angebotenen Newsletter, so ist
                die Eingabe der E-Mail Adresse in der jeweiligen Eingabemaske
                erforderlich. Bei der An- und bei der Abmeldung zum und vom
                Newsletter werden die IP-Adresse des Nutzers sowie Datum und
                Uhrzeit der Registrierung gespeichert.
              </p>
              <p>
                Darüber hinaus verwenden wir die Daten aus einem Newsletter
                (z.B. angeklickte Inhalte des Newsletters) zur Optimierung
                unserer Angebote.{" "}
              </p>
              <p>
                Für die Verarbeitung der Daten wird im Rahmen des Anmeldevorgang
                Ihre Einwilligung eingeholt und auf diese Datenschutzerklärung
                verwiesen.
              </p>
              <p>
                Es erfolgt im Zusammenhang mit der Datenverarbeitung für den
                Versand von Newslettern keine Weitergabe der Daten an sonstige
                Dritte. Die Daten werden ausschließlich für den Versand des
                Newsletters verwendet.
              </p>
              <p>
                Das Abonnement des Newsletters kann durch die betroffene Person
                jederzeit gekündigt werden. Ebenso kann die Einwilligung in die
                Speicherung der personenbezogenen Daten jederzeit widerrufen
                werden. Zu diesem Zweck findet sich in jedem Newsletter ein
                entsprechender Link.{" "}
              </p>
              <p>
                <strong>Web Bugs</strong>
                <br />
                Ausschließlich in den von uns versendeten Newslettern verwenden
                wir so genannte Web-Bugs. Web-Bugs sind kleine, ca. 1*1 Pixel
                große GIF-Dateien, die in anderen Grafiken oder in E-Mails
                versteckt werden können. Web-Bugs erfüllen ähnliche Funktionen
                wie Cookies, sind für Sie als Benutzer jedoch nicht zu erkennen.
                Die von uns verwendeten Web-Bugs werden auf Ihrem Computer
                gespeichert und teilen uns mit, ob Sie den an die bei uns
                hinterlegte E-Mail Adresse versendeten Newsletter geöffnet haben
                oder nicht. Die von den von uns eingesetzten Web-Bugs gesendeten
                Informationen beschränken sich hierbei auf Ihre IP-Adresse, die
                Internet-Adresse der besuchten Webseite (URL), den Zeitpunkt an
                dem der Web-Bug angesehen wurde, den Browsertyp des Benutzers,
                sowie zuvor gesetzte Cookie-Informationen. Durch Verwendung der
                Web Bugs können wir ihren Computer identifizieren und das
                Nutzerverhalten auswerten. Die ermittelten Daten sind anonym und
                werden nicht mit persönlichen Daten auf dem Computer des
                Benutzers oder mit einer Datenbank verknüpft.
              </p>
              <p>
                Um den Einsatz von Web-Bugs in unserem Newsletter zu
                unterbinden, stellen Sie bitte Ihr Mailprogramm so ein, dass in
                Nachrichten kein HTML angezeigt wird. Web-Bugs werden ebenfalls
                unterbunden, wenn Sie Ihre E-Mails offline lesen.
              </p>
              <p>
                <strong>Rechtsgrundlage für die Datenverarbeitung</strong>
                <br />
                Rechtsgrundlage für die Verarbeitung der Daten nach Anmeldung
                zum Newsletters durch den Nutzer ist bei Vorliegen einer
                Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.
                Rechtsgrundlage für die Vearbeitung von Daten in Webbugs ist
                Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht
                hierbei in der Erkenntnis über die Nutzung der von uns
                versendeten Inhalte in Newslettern.
              </p>
              <p>
                <strong>Zweck der Datenverarbeitung</strong>
                <br />
                Die Erhebung der E-Mail-Adresse des Nutzers dient dazu, den
                Newsletter zuzustellen.
              </p>
              <p>
                Die Erhebung sonstiger personenbezogener Daten im Rahmen des
                Anmeldevorgangs dient dazu, einen Missbrauch der Dienste oder
                der verwendeten E-Mail-Adresse zu verhindern.
              </p>
              <p>
                Die Erhebung der IP-Adresse im Rahmen der Webbugs dient dazu,
                statistische Zusammenhänge zwischen den versendeten Newslettern
                und hierauf eingehenden Bestellungen einzusehen.{" "}
              </p>
              <p>
                <strong>Dauer der Speicherung</strong>
                <br />
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist
                dann der Fall, wenn Sie sich für den Bezug des Newsletters
                abgemeldet haben. Die sonstigen im Rahmen des Anmeldevorgangs
                erhobenen personenbezogenen Daten werden in der Regel nach einer
                Frist von sechs Wochen gelöscht.
              </p>
              <p>
                <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
                <br />
                Das Abonnement des Newsletters kann durch den betroffenen Nutzer
                jederzeit gekündigt werden. Zu diesem Zweck findet sich in jedem
                Newsletter ein entsprechender Link.
              </p>
              <p>
                Hierdurch wird ebenfalls ein Widerruf der Einwilligung der
                Speicherung der während des Anmeldevorgangs erhobenen
                personenbezogenen Daten ermöglicht.
              </p>
            </li>
            <li className="privacy-section">
              <h4>E. Registrierung als Kunde</h4>
              <p>
                Eine Bestellung kann nur nach Registrierung und nur als
                Firmenkunde erfolgen. Hierfür ist die Angabe der E-Mail Adresse,
                der Firma, eines Ansprechpartners und der Kontaktdaten der Firma
                wie Anschrift und Telefonnummer notwendig.
              </p>
              <p>
                Im Falle der Registrierung als Kunde werden die von Ihnen in bei
                der Registrierung in der jeweiligen Eingabemaske eingegebenen
                Daten an uns übermittelt.
              </p>
              <p>
                Im Zeitpunkt der Registrierung werden zudem die IP-Adresse des
                Nutzers sowie das Datum und die Uhrzeit der Registrierung
                gespeichert.
              </p>
              <p>
                Im Rahmen des Registrierungsprozesses wird eine Einwilligung des
                Nutzers zur Verarbeitung dieser Daten eingeholt.
              </p>

              <p>
                <strong>Rechtsgrundlage für die Datenverarbeitung</strong>
                <br />
                Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen
                einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO. Dient
                die Registrierung der Erfüllung eines Vertrages, dessen
                Vertragspartei der Nutzer ist oder der Durchführung
                vorvertraglicher Maßnahmen, so ist zusätzliche Rechtsgrundlage
                für die Verarbeitung der Daten Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p>
                <strong>Zweck der Datenverarbeitung</strong>
                <br />
                Eine Eingabe der Vertragsdaten des Nutzers ist zur Erfüllung
                eines Vertrages mit dem Nutzer oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich. Bei einer Registrierung
                werden die hinterlegten Daten bei erneuter Anmeldung angezeigt
                und müssen nicht erneut eingegeben werden. Die bei Registrierung
                eingegebenen Daten werden darüber hinaus als Ihre Kontaktdaten
                beim Abschluss eines Vertrages zu Grunde gelegt.
              </p>
              <p>
                <strong>Dauer der Speicherung</strong>
                <br />
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist
                für die während des Registrierungsvorgangs zur Erfüllung eines
                Vertrags oder zur Durchführung vorvertraglicher Maßnahmen
                erhobenen Daten dann der Fall, wenn diese Daten für die
                Durchführung des Vertrages nicht mehr benötigt werden. Auch nach
                Abschluss des Vertrags kann eine Erforderlichkeit,
                personenbezogene Daten des Vertragspartners zu speichern,
                bestehen, um vertraglichen oder gesetzlichen Verpflichtungen
                nachzukommen.
              </p>
              <p>
                <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
                <br />
                Als Nutzer haben sie jederzeit die Möglichkeit, die
                Registrierung aufzulösen. Die über Sie gespeicherten Daten
                können Sie jederzeit abändern lassen. Eine Bearbeitung Ihrer
                Daten können Sie nach dem Einloggen als registrierter Nutzer
                vornehmen und hierbei alle eingegebenen Daten entfernen oder
                verändern.
              </p>
            </li>
            <li className="privacy-section">
              <h4>F. Kontaktaufnahme per E-mail </h4>
              <p>
                Über unsere Internetseite ist eine Kontaktaufnahme per E-Mail
                möglich. Bei einer Kontaktaufnahme per E-Mail wird Ihre E-Mail
                Adresse und Ihre Nachricht an uns übermittelt und von uns
                gespeichert.
              </p>

              <p>
                <strong>Rechtsgrundlage für die Datenverarbeitung</strong>
                <br />
                Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge
                einer Übersendung einer E-Mail übermittelt werden, ist Art. 6
                Abs. 1 lit. f DSGVO. Zielt ein E-Mail-Kontakt auf den Abschluss
                eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die
                Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p>
                <strong>Zweck der Datenverarbeitung</strong>
                <br />
                Die Verarbeitung der personenbezogenen Daten aus der E-Mail
                dient uns allein zur Bearbeitung der Kontaktaufnahme. Hierin
                liegt auch das erforderliche berechtigte Interesse an der
                Verarbeitung der Daten.
              </p>
              <p>
                <strong>Dauer der Speicherung</strong>
                <br />
                Die Daten werden nach Ablauf der handels- und steuerrechtlichen
                Aufbewahrungspflichten gelöscht.
              </p>
              <p>
                <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
                <br />
                Der Nutzer hat jederzeit die Möglichkeit der Speicherung seiner
                personenbezogenen Daten zu widersprechen. In einem solchen Fall
                kann die Konversation nicht fortgeführt werden. Alle
                personenbezogenen Daten, die im Zuge der Kontaktaufnahme
                gespeichert wurden, werden in diesem Fall gelöscht.
              </p>
            </li>
            <li className="privacy-section">
              <h4>G. Einsatz von Google Analytics </h4>
              <p>
                Unsere Internetseite nutzt schließlich Funktionen des
                Webanalysedienstes Google Analytics. Anbieter ist die Google
                Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.
                Google Analytics verwendet sog. "Cookies". Das sind Textdateien,
                die auf Ihrem Computer gespeichert werden und die eine Analyse
                der Benutzung der Website durch Sie ermöglichen. Die durch den
                Cookie erzeugten Informationen über Ihre Benutzung dieser
                Website werden in der Regel an einen Server von Google in den
                USA übertragen und dort gespeichert.
              </p>
              <p>
                Aufgrund der Aktivierung der IP-Anonymisierung auf dieser
                Webseite wird Ihre IP-Adresse von Google jedoch innerhalb von
                Mitgliedstaaten der Europäischen Union oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
                volle IP-Adresse an einen Server von Google in den USA
                übertragen und dort gekürzt. Die im Rahmen von Google Analytics
                von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
                Daten von Google zusammengeführt.
              </p>

              <p>
                <strong>Rechtsgrundlage für die Datenverarbeitung</strong>
                <br />
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und
                der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <p>
                <strong>Zweck der Datenverarbeitung</strong>
                <br />
                In unserem Auftrag wird Google die erhobenen Informationen
                nutzen, um die Nutzung unserer Website auszuwerten, um Reports
                über die Websiteaktivitäten zusammenzustellen und um weitere mit
                der Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen uns gegenüber zu erbringen.
              </p>
              <p>
                <strong>Dauer der Speicherung</strong>
                <br />
                Personenbezogene Daten werden aufgrund der Aktivierung des
                Anonymisierungs-Tools unmittelbar nach Erhebung gelöscht.
              </p>
              <p>
                <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
                <br />
                Sie können die Speicherung der Cookies durch eine entsprechende
                Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
                jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
                sämtliche Funktionen dieser Website vollumfänglich werden nutzen
                können. Sie können darüber hinaus die Erfassung der durch das
                Cookie erzeugten und auf Ihre Nutzung der Website bezogenen
                Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung
                dieser Daten durch Google verhindern, indem sie das unter dem
                folgenden Link verfügbare Browser-Plugin herunterladen und
                installieren:{" "}
                <a href="http://tools.google.com/dlpage/gaoptout?hl=de">
                  http://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Datenschutz;
