import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { state } from "../../store/reducers/events";

export default function Calendar() {
  const { events } = useSelector(state);
  const [data, setData] = useState(events)

  const calendarRef = useRef(null);

  return (
    <div style={{ padding: 20 }}>
      <FullCalendar
        nowIndicator={true}
        eventClick={(info) =>
          console.log(info.event.extendedProps, info.event.title)
        }
        editable={true}
        views={{
          dayGrid: {
            selectable: true,
          },
          timeGrid: {
            selectable: true,
          },
          dayGridMonth: {
            selectable: false,
          },
        }}
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        eventDrop={(info) => {
          const eventFiltered = data.filter(
            (event) => event.extendedProps.id !== info.event.extendedProps.id
          ) as any;
          setData([
            ...eventFiltered,
            {
              title: info.event.title,
              start: info.event.startStr,
              end: info.event.endStr,
              backgroundColor: info.event.backgroundColor,
              extendedProps: { id: info.event.extendedProps.id },
            },
          ]);
          alert("Dropped " + info.event.title);
        }}
        eventResize={(info) => {
          const eventFiltered = data.filter(
            (event) => event.extendedProps.id !== info.event.extendedProps.id
          ) as any;
          setData([
            ...eventFiltered,
            {
              title: info.event.title,
              start: info.event.startStr,
              end: info.event.endStr,
              backgroundColor: info.event.backgroundColor,
              extendedProps: { id: info.event.extendedProps.id },
            },
          ]);
          alert("Resized " + info.event.title);
        }}
        select={(info) => {
          // @ts-ignore
          setData((event) => {
            const newId = data[data.length - 1].extendedProps.id + 1;
            return [
              ...event,
              {
                title: `sala ${newId}`,
                start: info.startStr,
                end: info.endStr,
                backgroundColor: "gray",
                extendedProps: { id: newId },
              },
            ];
          });
          alert("selected " + info.startStr + " to " + info.endStr);
        }}
        events={data}
        locale={"en-US"}
        timeZone={"UTF"}
        titleFormat={{ year: "numeric", month: "long" }}
        // allDayText={"24h"}
        allDaySlot={false}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
        }}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          right: "prevYear,prev,next,nextYear",
        }}
      />
    </div>
  );
}
