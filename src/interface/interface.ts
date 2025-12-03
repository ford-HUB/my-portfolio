import React from "react";

export interface HighlightsTimeline {
    title: string,
    content: React.ReactNode,
    date?: string,
    images?: string[]
}