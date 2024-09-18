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
                <a
                  href="http://tools.google.com/dlpage/gaoptout?hl=de"
                  className="linkdatenschutz"
                >
                  http://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
            </li>
            <li className="privacy-section">
              <h4>H. Sonstige Weitergabe der Daten an Dritte </h4>
              <p>
                Im Rahmen der Ausführung der getätigten Bestellung ist es
                notwendig, dass wir den Namen und die Anschrift des Kunden an
                unseren Zahlungsdienstleister und an den Paketdienstleister
                übermitteln. Die Übermittlung ist notwendig, um Ihre Zahlung
                abschließen und Ihre Bestellung ausliefern zu können. Die
                Übermittlung der Daten beschränkt sich hierbei auf das
                erforderliche Minimum. Rechtsgrundlage hierfür ist Art. 6 Abs. 1
                lit. b DSGVO.
              </p>
              <p>
                Haben Sie eine Avisierung des Liefertermins durch den
                Paketdienstleister gewünscht, wird auch Ihre E-Mail Adresse an
                den Paketdienstleister übermittelt. Die E-Mail Adresse wird von
                dem Paketdienstleister allein zur Avisierung des Liefertermins
                genutzt. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p>
                Mit Aufgabe der Bestellung erklären Sie Ihr Einverständnis
                damit, dass die oben beschriebenen Daten zur Zahlungsabwicklung
                und zur Auslieferung der Ware an unsere Paketdienstleister
                übertragen werden Hinsichtlich Ihrer Rechte gelten die in diesem
                und den nachfolgenden Abschnitten aufgeführten Bestimmungen
                entsprechend.{" "}
              </p>
              <p>
                Bei Inanspruchnahme der Zahlungsart „paypal“ geben wir Ihren
                Namen, Ihre E-Mail Adresse, Ihre Anschrift und die
                Zahlungsinformationen ihres Einkaufs an die Paypal (Europe)
                S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449
                Luxembourg (nachfolgend "PayPal") weiter. Die Weitergabe erfolgt
                gemäß Art. 6 Abs. 1 lit. b DSGVO und nur insoweit, als dies für
                die Zahlungsabwicklung erforderlich ist.
              </p>
              <p>
                Bei Zahlung per paypal-Rechnung oder Ratenzahlung führt PayPal
                führt einen Risk-Check durch und entscheidet, ob eine Zahlung
                mittels der von Ihnen ausgewählten Zahlungsquelle möglich ist.
                Hierfür werden Ihre Zahlungsdaten gegebenenfalls gemäß Art. 6
                Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von
                PayPal an der Feststellung Ihrer Zahlungsfähigkeit an
                Auskunfteien weitergegeben. Das Ergebnis der Bonitätsprüfung in
                Bezug auf die statistische Zahlungsausfallwahrscheinlichkeit
                verwendet PayPal zum Zwecke der Entscheidung über die
                Bereitstellung der jeweiligen Zahlungsmethode. Die
                Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog.
                Score-Werte). Soweit Score-Werte in das Ergebnis der
                Bonitätsauskunft einfließen, haben diese ihre Grundlage in einem
                wissenschaftlich anerkannten mathematisch-statistischen
                Verfahren. In die Berechnung der Score-Werte fließen unter
                anderem, aber nicht ausschließlich, Anschriftendaten ein.
                Weitere datenschutzrechtliche Informationen, unter anderem zu
                den verwendeten Auskunfteien, entnehmen Sie bitte der
                Datenschutzerklärung von PayPal:{" "}
                <a
                  href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                  className="linkdatenschutz"
                >
                  https://www.paypal.com/de/webapps/mpp/ua/privacy-full
                </a>
              </p>
              <p>
                Sie können dieser Verarbeitung Ihrer Daten jederzeit durch eine
                Nachricht an PayPal widersprechen. Jedoch bleibt PayPal ggf.
                weiterhin berechtigt, Ihre personenbezogenen Daten zu
                verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung
                erforderlich ist.
              </p>
            </li>
            <li className="privacy-section">
              <h4> I. Rechte der betroffenen Person </h4>
              <p>
                Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
                Betroffener i.S.d. DS-GVO und es stehen Ihnen folgende Rechte
                gegenüber uns („dem Verantwortlichen“) zu:
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Auskunftsrecht</strong>
                  </p>
                  <p>
                    Sie können eine Bestätigung darüber verlangen, ob
                    personenbezogene Daten, die Sie betreffen, von uns
                    verarbeitet werden.{" "}
                  </p>
                  <p>
                    Liegt eine solche Verarbeitung vor, können Sie von uns über
                    folgende Informationen Auskunft verlangen:
                  </p>
                  <ul>
                    <li>
                      <strong>a.</strong> die Zwecke, zu denen die
                      personenbezogenen Daten verarbeitet werden;
                    </li>
                    <li>
                      <strong>b.</strong> die Kategorien von personenbezogenen
                      Daten, welche verarbeitet werden;
                    </li>
                    <li>
                      <strong>c.</strong> die Empfänger bzw. die Kategorien von
                      Empfängern, gegenüber denen die Sie betreffenden
                      personenbezogenen Daten offen gelegt wurden oder noch
                      offen gelegt werden;
                    </li>
                    <li>
                      <strong>d.</strong> die geplante Dauer der Speicherung der
                      Sie betreffenden personenbezogenen Daten oder, falls
                      konkrete Angaben hierzu nicht möglich sind, Kriterien für
                      die Festlegung der Speicherdauer;
                    </li>
                    <li>
                      <strong>e.</strong> das Bestehen eines Rechts auf
                      Berichtigung oder Löschung der Sie betreffenden
                      personenbezogenen Daten, eines Rechts auf Einschränkung
                      der Verarbeitung durch uns oder eines Widerspruchsrechts
                      gegen diese Verarbeitung;{" "}
                    </li>
                    <li>
                      <strong>f.</strong> das Bestehen eines Beschwerderechts
                      bei einer Aufsichtsbehörde;
                    </li>
                    <li>
                      <strong>g.</strong> alle verfügbaren Informationen über
                      die Herkunft der Daten, wenn die personenbezogenen Daten
                      nicht bei der betroffenen Person erhoben werden;
                    </li>
                    <li>
                      <strong>h.</strong> das Bestehen einer automatisierten
                      Entscheidungsfindung einschließlich Profiling gemäß Art.
                      22 Abs. 1 und 4 DS-GVO und – zumindest in diesen Fällen –
                      aussagekräftige Informationen über die involvierte Logik
                      sowie die Tragweite und die angestrebten Auswirkungen
                      einer derartigen Verarbeitung für die betroffene Person.
                    </li>
                  </ul>
                  <p>
                    Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob
                    die Sie betreffenden personenbezogenen Daten in ein
                    Drittland oder an eine internationale Organisation
                    übermittelt werden. In diesem Zusammenhang können Sie
                    verlangen, über die geeigneten Garantien gem. Art. 46 DS-GVO
                    im Zusammenhang mit der Übermittlung unterrichtet zu werden.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Recht auf Berichtigung </strong>
                  </p>
                  <p>
                    Sie haben ein Recht auf Berichtigung und/oder
                    Vervollständigung, sofern die verarbeiteten
                    personenbezogenen Daten, die Sie betreffen, unrichtig oder
                    unvollständig sind. Die Berichtigung ist von uns
                    unverzüglich vorzunehmen.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Recht auf Löschung</strong>
                  </p>
                  <p>
                    3.1) Sie können von uns verlangen, dass die Sie betreffenden
                    personenbezogenen Daten unverzüglich gelöscht werden, und
                    wir sind verpflichtet, diese Daten unverzüglich zu löschen,
                    sofern einer der folgenden Gründe zutrifft:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>a.</strong> Die Sie betreffenden
                        personenbezogenen Daten sind für die Zwecke, für die sie
                        erhoben oder auf sonstige Weise verarbeitet wurden,
                        nicht mehr notwendig.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>b.</strong> Sie widerrufen Ihre Einwilligung,
                        auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a
                        oder Art. 9 Abs. 2 lit. a DS-GVO stützte, und es fehlt
                        an einer anderweitigen Rechtsgrundlage für die
                        Verarbeitung.{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>c.</strong> Sie legen gem. Art. 21 Abs. 1 DS-GVO
                        Widerspruch gegen die Verarbeitung ein und es liegen
                        keine vorrangigen berechtigten Gründe für die
                        Verarbeitung vor, oder die Sie legen gem. Art. 21 Abs. 2
                        DS-GVO Widerspruch gegen die Verarbeitung ein.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>d.</strong> Die Sie betreffenden
                        personenbezogenen Daten wurden unrechtmäßig verarbeitet.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>e.</strong> Die Löschung der Sie betreffenden
                        personenbezogenen Daten ist zur Erfüllung einer
                        rechtlichen Verpflichtung nach dem Unionsrecht oder dem
                        Recht der Bundesrepublik Deutschland erforderlich.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>f.</strong> Die Sie betreffenden
                        personenbezogenen Daten wurden in Bezug auf angebotene
                        Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1
                        DS-GVO erhoben.
                      </p>
                    </li>
                  </ul>
                  <p>
                    3.2) Haben wir die Sie betreffenden personenbezogenen Daten
                    öffentlich gemacht und sind wir gem. Art. 17 Abs. 1 DS-GVO
                    zu deren Löschung verpflichtet, so treffen wir unter
                    Berücksichtigung der verfügbaren Technologie und der
                    Implementierungskosten angemessene Maßnahmen, auch
                    technischer Art, um für die Datenverarbeitung
                    Verantwortliche, die die personenbezogenen Daten
                    verarbeiten, darüber zu informieren, dass Sie als betroffene
                    Person von ihnen die Löschung aller Links zu diesen
                    personenbezogenen Daten oder von Kopien oder Replikationen
                    dieser personenbezogenen Daten verlangt haben.{" "}
                  </p>
                  <p>
                    3.3) Das Recht auf Löschung besteht nicht, soweit die
                    Verarbeitung erforderlich ist:
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <p>
                        <strong>a.</strong> Zur Ausübung des Rechts auf freie
                        Meinungsäußerung und Information;
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p>
                        <strong>b.</strong> Zur Erfüllung einer rechtlichen
                        Verpflichtung, die die Verarbeitung nach dem Recht der
                        Union oder der Bundesrepublik Deutschland erfordert,
                        oder zur Wahrnehmung einer Aufgabe, die im öffentlichen
                        Interesse liegt;
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p>
                        <strong>c.</strong> Aus Gründen des öffentlichen
                        Interesses im Bereich der öffentlichen Gesundheit gemäß
                        Art. 9 Abs. 2 lit. h und i sowie Art. 9 Ab. 3 DS-GVO;
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p>
                        <strong>d.</strong> für im öffentlichen Interesse
                        liegende Archivzwecke, wissenschaftliche oder
                        historische Forschungszwecke oder für statistische
                        Zwecke gem. Art. 89 Abs. 1 DS-GVO, soweit das in Abs. 1
                        genannte Recht voraussichtlich die Verwirklichung der
                        Ziele dieser Verarbeitung unmöglich macht oder ernsthaft
                        beeinträchtigt, oder
                      </p>
                    </li>
                    <li>
                      {" "}
                      <p>
                        <strong>e.</strong> zur Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Recht auf Einschränkung der Verarbeitung</strong>
                  </p>
                  <p>
                    Unter den folgenden Voraussetzungen können Sie die
                    Einschränkung der Verarbeitung der Sie betreffenden
                    personenbezogenen Daten verlangen:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>a.</strong> Wenn Sie die Richtigkeit der Sie
                        betreffenden personenbezogenen für eine Dauer
                        bestreiten, die es uns ermöglicht, die Richtigkeit der
                        personenbezogenen Daten zu überprüfen;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>b.</strong> Die Verarbeitung unrechtmäßig ist
                        und Sie die Löschung der personenbezogenen Daten
                        ablehnen und stattdessen die Einschränkung der Nutzung
                        der personenbezogenen Daten verlangen;
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>c.</strong> Wir die personenbezogenen Daten für
                        die Zwecke der Verarbeitung nicht länger benötigen, Sie
                        diese jedoch zur Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen benötigen, oder
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>d.</strong> wenn Sie Widerspruch gegen die
                        Verarbeitung gemäß Art. 21 Abs. 1 DS-GVO eingelegt haben
                        und noch nicht feststeht, ob unsere berechtigten Gründe
                        gegenüber Ihren Gründen überwiegen.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Wurde die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten eingeschränkt, dürfen diese Daten –
                    von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung
                    oder zur Geltendmachung, Ausübung oder Verteidigung von
                    Rechtsansprüchen oder zum Schutz der Rechte einer anderen
                    natürlichen oder juristischen Person oder aus Gründen eines
                    wichtigen öffentlichen Interesses der Union oder eines
                    Mitgliedstaats verarbeitet werden.
                  </p>
                  <p>
                    Wurde die Einschränkung der Verarbeitung nach den o.g.
                    Voraussetzungen eingeschränkt, werden Sie von uns
                    unterrichtet, bevor die Einschränkung aufgehoben wird.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Recht auf Unterrichtung</strong>
                  </p>
                  <p>
                    Haben Sie das Recht auf Berichtigung, Löschung oder
                    Einschränkung der Verarbeitung geltend gemacht, sind wir
                    verpflichtet, allen Empfängern, denen die Sie betreffenden
                    personenbezogenen Daten offen gelegt wurden, diese
                    Berichtigung oder Löschung der Daten oder Einschränkung der
                    Verarbeitung mitzuteilen, es sei denn, dies erweist sich als
                    unmöglich oder ist mit einem unverhältnismäßigen Aufwand
                    verbunden.
                  </p>
                  <p>
                    Ihnen steht ferner das Recht zu, über diese Empfänger
                    unterrichtet zu werden.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Recht auf Datenübertragbarkeit</strong>
                  </p>
                  <p>
                    Sie haben das das Recht, die Sie betreffenden
                    personenbezogenen Daten, die Sie uns bereitgestellt haben,
                    in einem strukturierten, gängigen und maschinenlesbaren
                    Format zu erhalten. Außerdem haben Sie das Recht diese Daten
                    einem anderen Verantwortlichen ohne Behinderung durch uns zu
                    übermitteln, sofern
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>a.</strong> die Verarbeitung auf einer
                        Einwilligung gem. Art. 6 Abs. 1 lit. a DS-GVO oder Art.
                        9 Abs. 2 lit. a DS-GVO oder auf einem Vertrag gem. Art.
                        6 Abs. 1 lit. b DS-GVO beruht und
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>b.</strong> die Verarbeitung mithilfe
                        automatisierter Verfahren erfolgt.
                      </p>
                    </li>
                  </ul>
                  <p>
                    In Ausübung dieses Rechts haben Sie ferner das Recht zu
                    erwirken, dass die Sie betreffenden personenbezogenen Daten
                    direkt von einem Verantwortlichen einem anderen
                    Verantwortlichen übermittelt werden, soweit dies technisch
                    machbar ist. Freiheiten und Rechte anderer Personen dürfen
                    hierdurch nicht beeinträchtigt werden.
                  </p>
                  <p>
                    Das Recht auf Datenübertragbarkeit gilt nicht für eine
                    Verarbeitung personenbezogener Daten, die für die
                    Wahrnehmung einer Aufgabe erforderlich ist, die im
                    öffentlichen Interesse liegt.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Widerspruchsrecht</strong>
                  </p>
                  <p>
                    Sie haben das Recht, aus Gründen, die sich aus ihrer
                    besonderen Situation ergeben, jederzeit gegen die
                    Verarbeitung der Sie betreffenden personenbezogenen Daten,
                    die aufgrund von Art. 6 Abs. 1 lit. e oder f DS-GVO erfolgt,
                    Widerspruch einzulegen; dies gilt auch für ein auf diese
                    Bestimmungen gestütztes Profiling.{" "}
                  </p>
                  <p>
                    Nach einem Widerspruch verarbeiten wir die Sie betreffenden
                    personenbezogenen Daten nicht mehr, es sei denn, wir können
                    zwingende schutzwürdige Gründe für die Verarbeitung
                    nachweisen, die Ihren Interessen, Rechten und Freiheiten
                    überwiegen, oder die Verarbeitung dient der Geltendmachung,
                    Ausübung oder Verteidigung von Rechtsansprüchen.
                  </p>
                  <p>
                    Werden die Sie betreffenden personenbezogenen Daten
                    verarbeitet, um Direktwerbung zu betreiben, haben Sie das
                    Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie
                    betreffenden personenbezogenen Daten zum Zwecke derartiger
                    Werbung einzulegen; dies gilt auch für das Profiling, soweit
                    es mit solcher Direktwerbung in Verbindung steht.
                  </p>
                  <p>
                    Widersprechen Sie der Verarbeitung für Zwecke der
                    Direktwerbung, so werden die Sie betreffenden
                    personenbezogenen Daten nicht mehr für diese Zwecke
                    verarbeitet.
                  </p>
                  <p>
                    Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung
                    von Diensten der Informationsgesellschaft – ungeachtet der
                    Richtlinie 2002/58/EG – Ihr Widerspruchsrecht mittels
                    automatisierter Verfahren auszuüben, bei denen technische
                    Spezifikationen verwendet werden.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Recht auf Widerruf der datenschutzrechtlichen
                      Einwilligungserklärung
                    </strong>
                  </p>
                  <p>
                    Sie haben das Recht, Ihre datenschutzrechtliche
                    Einwilligungserklärung jederzeit zu widerrufen. Durch den
                    Widerruf der Einwilligung wird die Rechtmäßigkeit der
                    aufgrund der Einwilligung bis zum Widerruf erfolgten
                    Verarbeitung nicht berührt.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Automatisierte Entscheidung im Einzelfall einschließlich
                      Profiling
                    </strong>
                  </p>
                  <p>
                    Sie haben das Recht, nicht einer ausschließlich auf einer
                    automatisierten Verarbeitung – einschließlich Profiling –
                    beruhenden Entscheidung unterworfen zu werden, die Ihnen
                    gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher
                    Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die
                    Entscheidung{" "}
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>a. </strong>für den Abschluss oder die Erfüllung
                        eines Vertrags zwischen Ihnen und uns erforderlich ist,
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>b. </strong>aufgrund von Rechtsvorschriften der
                        Union oder der Bundesrepublik Deutschland zulässig ist
                        und diese Rechtsvorschriften angemessene Maßnahmen zur
                        Wahrung Ihrer Rechte und Freiheiten sowie Ihrer
                        berechtigten Interessen enthalten oder
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>c. </strong>mit Ihrer ausdrücklichen
                        Einwilligung erfolgt.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Recht auf Beschwerde bei einer Aufsichtsbehörde
                    </strong>
                  </p>
                  <p>
                    Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                    gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf
                    Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem
                    Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes
                    oder des Orts des mutmaßlichen Verstoßes, wenn Sie der
                    Ansicht sind, dass die Verarbeitung der Sie betreffenden
                    personenbezogenen Daten gegen die DSGVO verstößt.{" "}
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <strong>Mouseflow (Mouseflow ApS)</strong>Diese Website
                verwendet Mouseflow, ein Webanalyse-Tool der Mouseflow ApS,
                Flaesketorvet 68, 1711 Kopenhagen, Dänemark, um zufällig
                ausgewählte einzelne Besuche (nur mit pseudonymisierter
                IP-Adresse) aufzuzeichnen. So entsteht ein Protokoll der
                Mausbewegungen und Klicks mit der Absicht einzelne
                Website-Besuche stichprobenartig abzuspielen und potenzielle
                Verbesserungen für die Website daraus abzuleiten. Sofern hierbei
                auch personenbezogene Daten verarbeitet werden, erfolgt dies
                gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
                Interesses an der statistischen Analyse des Nutzerverhaltens zu
                Optimierungszwecken. Die verarbeiteten Informationen werden
                nicht an Dritte weitergegeben. Sie können der Webanalyse von
                Mouseflow jederzeit durch Setzung eines Opt-Out-Cookies
                dauerhaft widersprechen, indem Sie das unter folgendem Link
                verfügbare Opt-Out-Cookie herunterladen und installieren:{" "}
                <a href="www.mouseflow.de/opt-out/" className="linkdatenschutz">
                  www.mouseflow.de/opt-out/
                </a>
                Weitergehende Informationen und die Datenschutzbestimmungen von
                Mouseflow können Sie hier einsehen:
                <a
                  href="https://mouseflow.com/privacy/"
                  className="linkdatenschutz"
                >
                  https://mouseflow.com/privacy/
                </a>{" "}
                Das Opt-Out-Cookie wird von Quantcast gesetzt. Soweit rechtlich
                erforderlich, haben wir zur vorstehend dargestellten
                Verarbeitung Ihrer Daten Ihre Einwilligung gemäß Art. 6 Abs. 1
                lit. a DSGVO eingeholt. Sie können Ihre erteilte Einwilligung
                jederzeit mit Wirkung für die Zukunft widerrufen. Um Ihren
                Widerruf auszuüben, befolgen Sie bitte die vorstehend
                geschilderte Möglichkeit zur Vornahme eines Widerspruchs.
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
