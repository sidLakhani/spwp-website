import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// To use your own Google Calendar:
// 1. Go to Google Calendar → Settings → Calendar you want to share
// 2. Under "Integrate calendar", copy the Calendar ID
// 3. Replace the CALENDAR_ID below with your calendar ID
// 4. Make sure your calendar is set to "Public" in sharing settings

const CALENDAR_ID = "spwperiods%40gmail.com";

const Events = () => {
  const calendarSrc = `https://calendar.google.com/calendar/embed?src=${CALENDAR_ID}&ctz=America%2FNew_York&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0`;

  return (
    <>
      <Helmet>
        <title>Upcoming Events | Sincerely, People With Periods</title>
        <meta
          name="description"
          content="Check out our upcoming events and join us in the fight against period poverty."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section with Light Pink Background */}
          <section className="bg-pink-100 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-foreground">
                Upcoming Events
              </h1>
            </div>
          </section>

          {/* Calendar Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <p className="text-center text-lg text-muted-foreground mb-8">
                  Stay updated with our events and initiatives. We'd love to see you there!
                </p>
                <div className="w-full rounded-lg overflow-hidden shadow-lg border border-border">
                  <iframe
                    src={calendarSrc}
                    style={{ border: 0 }}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Event Calendar"
                    className="bg-background"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Calendar syncs automatically with our Google Calendar. Check back for updates!
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;
