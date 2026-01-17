'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { experienceData, getExperienceIcon, getExperienceColor, type ExperienceItem } from '@/lib/experience';

export function ExperienceTimeline() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and learning experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 ${getExperienceColor(exp.type)}`}></div>
                
                {/* Experience card */}
                <Card className={`overflow-hidden hover:shadow-lg transition-all duration-300 ${expandedItems[exp.id] ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardHeader className="pb-3 cursor-pointer" onClick={() => toggleExpand(exp.id)}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{getExperienceIcon(exp.type)}</span>
                          <CardTitle className="text-xl">{exp.position}</CardTitle>
                        </div>
                        <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="ml-2">
                          {expandedItems[exp.id] ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: expandedItems[exp.id] ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.description.map((desc, descIndex) => (
                              <motion.li 
                                key={descIndex}
                                className="flex items-start gap-2 text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: expandedItems[exp.id] ? 1 : 0, x: expandedItems[exp.id] ? 0 : -10 }}
                                transition={{ duration: 0.3, delay: descIndex * 0.1 }}
                              >
                                <span className="text-primary mt-1">•</span>
                                <span>{desc}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Skills & Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: expandedItems[exp.id] ? 1 : 0, scale: expandedItems[exp.id] ? 1 : 0.8 }}
                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                              >
                                <Badge variant="secondary">{skill}</Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}